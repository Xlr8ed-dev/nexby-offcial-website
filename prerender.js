import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import puppeteer from 'puppeteer';
import xml2js from 'xml2js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = __dirname;
const distDir = path.join(rootDir, 'dist');
const sitemapPath = path.join(rootDir, 'sitemap.xml');

const PORT = process.env.PORT || 3000;
// Concurrency for the REMAINING routes (after the serial warm-up batch).
// The first 5 routes are always processed serially to warm all lazy chunks.
const CONCURRENCY = 3;
const SERIAL_WARMUP_COUNT = 5;

async function run() {
  if (!fs.existsSync(distDir)) {
    console.error(`Dist directory not found at ${distDir}. Did you run build?`);
    process.exit(1);
  }

  // 1. Start Express server to serve the static build
  const app = express();
  app.use(express.static(distDir));
  app.use((req, res) => {
    res.sendFile(path.join(distDir, 'index.html'));
  });

  let activePort = 0;
  const server = await new Promise((resolve) => {
    const s = app.listen(0, () => {
      activePort = s.address().port;
      resolve(s);
    });
  });
  console.log(`Server started on http://localhost:${activePort}`);

  try {
    // 2. Parse sitemap.xml to get routes
    const sitemapXml = fs.readFileSync(sitemapPath, 'utf-8');
    const parser = new xml2js.Parser();
    const result = await parser.parseStringPromise(sitemapXml);

    const routes = result.urlset.url.map((u) => {
      const url = new URL(u.loc[0]);
      return url.pathname;
    });

    console.log(`Found ${routes.length} routes to prerender from sitemap.xml`);

    // 3. Launch Puppeteer
    const browser = await puppeteer.launch({
      headless: true,
      executablePath: process.env.PUPPETEER_EXECUTABLE_PATH || undefined,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    // ──────────────────────────────────────────────────────────
    // 4. SERIAL WARM-UP PHASE
    //    The first N routes are rendered one-at-a-time. This
    //    ensures all shared JS bundles AND the heaviest page
    //    chunks are cached before concurrent workers start.
    //    This eliminates the CPU-contention that caused SEO
    //    tag timeouts on cold-start pages.
    // ──────────────────────────────────────────────────────────
    const serialRoutes = routes.slice(0, SERIAL_WARMUP_COUNT);
    const concurrentRoutes = routes.slice(SERIAL_WARMUP_COUNT);

    const serialPage = await browser.newPage();
    await setupPage(serialPage);

    console.log(`🔥 Serial warm-up: rendering first ${serialRoutes.length} routes...`);
    for (const route of serialRoutes) {
      await prerenderRoute(serialPage, route, activePort);
    }
    await serialPage.close();
    console.log(`🔥 Warm-up complete.`);

    // 5. CONCURRENT PHASE — remaining routes with warm cache
    if (concurrentRoutes.length > 0) {
      const pages = [];
      for (let i = 0; i < CONCURRENCY; i++) {
        const page = await browser.newPage();
        await setupPage(page);
        pages.push(page);
      }

      let routeIndex = 0;
      async function worker(page) {
        while (routeIndex < concurrentRoutes.length) {
          const route = concurrentRoutes[routeIndex++];
          await prerenderRoute(page, route, activePort);
        }
      }

      await Promise.all(pages.map(page => worker(page)));
    }

    await browser.close();
    console.log('✅ Prerendering completed successfully.');

  } catch (err) {
    console.error('❌ Error during prerendering:', err);
    process.exit(1);
  } finally {
    server.close();
  }
}

// ── Helpers ─────────────────────────────────────────────────

/** Configure request interception to block analytics/fonts */
async function setupPage(page) {
  await page.setUserAgent((await page.browser().userAgent()) + ' PrerenderBot');
  await page.setRequestInterception(true);
  page.on('request', (req) => {
    const url = req.url();
    const resourceType = req.resourceType();
    if (
      url.includes('googletagmanager.com') ||
      url.includes('facebook.net') ||
      url.includes('facebook.com') ||
      url.includes('fonts.googleapis.com') ||
      url.includes('fonts.gstatic.com') ||
      resourceType === 'font'
    ) {
      req.abort();
    } else {
      req.continue();
    }
  });
  page.on('pageerror', err => {
    console.log(`[PAGE ERROR] ${err.toString()}`);
  });
}

/** Prerender a single route with retry logic for SEO tags */
async function prerenderRoute(page, route, activePort) {
  const localUrl = `http://localhost:${activePort}${route}`;
  console.log(`⏳ [${route}] Starting prerender...`);

  try {
    const response = await page.goto(localUrl, { waitUntil: 'networkidle2', timeout: 30000 });

    // Accept 2xx and 304 (Not Modified — fine, page renders from cache)
    const status = response ? response.status() : 0;
    if (!response || (status >= 400)) {
      throw new Error(`HTTP status ${status}`);
    }

    // Wait for React to render main content
    await page.waitForSelector('h1', { timeout: 10000 }).catch(() => {});

    // Wait for react-helmet-async to inject SEO tags
    let seoReady = await page.waitForFunction(() => {
      return !!document.querySelector('meta[name="description"]') &&
             !!document.querySelector('link[rel="canonical"]');
    }, { timeout: 15000 }).then(() => true).catch(() => false);

    // RETRY: if SEO tags still missing, wait 3s and re-check
    if (!seoReady) {
      await new Promise(r => setTimeout(r, 3000));
      seoReady = await page.evaluate(() => {
        return !!document.querySelector('meta[name="description"]') &&
               !!document.querySelector('link[rel="canonical"]');
      });
    }

    // Validate SEO elements
    const seoResult = await page.evaluate(() => {
      const missing = [];
      if (!document.querySelector('title') || !document.title) missing.push('<title>');
      if (!document.querySelector('meta[name="description"]')) missing.push('<meta name="description">');
      if (!document.querySelector('link[rel="canonical"]')) missing.push('<link rel="canonical">');
      if (!document.querySelector('h1')) missing.push('<h1>');
      return { missing };
    });

    if (seoResult.missing.length > 0) {
      console.warn(`⚠️  [${route}] Missing SEO elements: ${seoResult.missing.join(', ')}`);
    }

    // Save HTML
    const html = await page.content();
    let outputPath;
    if (route === '/') {
      outputPath = path.join(distDir, 'index.html');
    } else {
      const routeDir = path.join(distDir, route);
      if (!fs.existsSync(routeDir)) {
        fs.mkdirSync(routeDir, { recursive: true });
      }
      outputPath = path.join(routeDir, 'index.html');
    }

    fs.writeFileSync(outputPath, html);
    console.log(`✅ [${route}] Prerendered successfully`);
  } catch (err) {
    console.error(`❌ [${route}] Failed to prerender: ${err.message}`);
  }
}

run();
