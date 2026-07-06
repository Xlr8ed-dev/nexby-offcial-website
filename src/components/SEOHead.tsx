import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { getSEO } from "../seo/seoConfig";

interface SEOHeadProps {
  /** Override the pathname used for config lookup (defaults to current route) */
  pathname?: string;
}

/**
 * Drop this at the top of any page component.
 * It reads the seoConfig for the current route and injects
 * <title>, <meta name="description">, canonical, OG, and Twitter tags.
 */
const SEOHead = ({ pathname }: SEOHeadProps) => {
  const location = useLocation();
  const path = pathname ?? location.pathname;
  const seo = getSEO(path);

  return (
    <Helmet>
      {/* Core */}
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <link rel="canonical" href={seo.canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={seo.og.title} />
      <meta property="og:description" content={seo.og.description} />
      <meta property="og:url" content={seo.og.url} />
      <meta property="og:image" content={seo.og.image} />
      <meta property="og:type" content={seo.og.type ?? "website"} />
      <meta property="og:site_name" content="Nexby AI" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content={seo.twitter.card} />
      <meta name="twitter:title" content={seo.twitter.title} />
      <meta name="twitter:description" content={seo.twitter.description} />
      <meta name="twitter:image" content={seo.twitter.image} />
      <meta name="twitter:site" content="@nexbyai" />

      {/* JSON-LD Schema (if defined for this route) */}
      {seo.schema && (
        <script type="application/ld+json">
          {JSON.stringify(Array.isArray(seo.schema) ? seo.schema : seo.schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
