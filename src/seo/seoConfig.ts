export interface SEOMeta {
  title: string;
  description: string;
  canonical: string;
  og: {
    title: string;
    description: string;
    url: string;
    image: string;
    type?: string;
  };
  twitter: {
    card: string;
    title: string;
    description: string;
    image: string;
  };
  schema?: Record<string, unknown> | Record<string, unknown>[];
}

import {
  serviceSchema,
  faqPageSchema,
  breadcrumbSchema,
  globalFAQs,
} from "./schemas";

const BASE_URL = "https://nexby.ai";
const DEFAULT_OG_IMAGE = `${BASE_URL}/images/og-default.png`;

export const seoConfig: Record<string, SEOMeta> = {
  "/": {
    title: "Nexby AI — AI-Powered Sales, Recruitment & Operations for Indian SMEs",
    description:
      "Nexby AI builds done-for-you omnichannel AI automation for Indian SMEs. AI telecalling, WhatsApp follow-up, and email — billed only on connected calls, starting ₹6.",
    canonical: `${BASE_URL}/`,
    og: {
      title: "Nexby AI — AI Automation for Indian SMEs",
      description:
        "AI-powered lead follow-up across voice, WhatsApp, and email. Starting ₹6 per connected call. 300+ businesses onboarded.",
      url: `${BASE_URL}/`,
      image: DEFAULT_OG_IMAGE,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Nexby AI — AI Automation for Indian SMEs",
      description:
        "AI-powered lead follow-up across voice, WhatsApp, and email. Starting ₹6 per connected call.",
      image: DEFAULT_OG_IMAGE,
    },
  },

  "/about-us": {
    title: "About Nexby AI Solutions | Enterprise AI Automation Company, Mumbai",
    description:
      "Nexby AI Solutions is a Mumbai-based enterprise AI automation company. We build AI agents for sales, recruitment, and operations — trusted by 300+ businesses across India.",
    canonical: `${BASE_URL}/about-us`,
    og: {
      title: "About Nexby AI Solutions",
      description:
        "Mumbai-based AI automation company powering 300+ businesses with AI telecalling, recruitment, and operations agents.",
      url: `${BASE_URL}/about-us`,
      image: DEFAULT_OG_IMAGE,
    },
    twitter: {
      card: "summary_large_image",
      title: "About Nexby AI Solutions",
      description:
        "Mumbai-based AI automation company powering 300+ businesses across India.",
      image: DEFAULT_OG_IMAGE,
    },
  },

  "/contact-us": {
    title: "Contact Nexby AI | Get a Demo or Talk to Sales",
    description:
      "Reach Nexby AI at +91 98920 48816 or hello@nexby.ai. Book a live demo of our AI telecalling, AI recruiter, or Expo Insight products.",
    canonical: `${BASE_URL}/contact-us`,
    og: {
      title: "Contact Nexby AI",
      description:
        "Talk to our team. Book a live demo of AI telecalling, AI recruiter, or Expo Insight.",
      url: `${BASE_URL}/contact-us`,
      image: DEFAULT_OG_IMAGE,
    },
    twitter: {
      card: "summary_large_image",
      title: "Contact Nexby AI",
      description: "Book a live demo of AI telecalling, AI recruiter, or Expo Insight.",
      image: DEFAULT_OG_IMAGE,
    },
  },

  "/careers": {
    title: "Careers at Nexby AI Solutions | Join the AI Automation Team",
    description:
      "Build AI that transforms Indian businesses. Nexby AI is hiring engineers, sales, and growth roles. Work on real AI products used by 300+ companies.",
    canonical: `${BASE_URL}/careers`,
    og: {
      title: "Careers at Nexby AI",
      description:
        "Join the team building AI automation for Indian SMEs. Open roles in engineering, sales, and growth.",
      url: `${BASE_URL}/careers`,
      image: DEFAULT_OG_IMAGE,
    },
    twitter: {
      card: "summary_large_image",
      title: "Careers at Nexby AI",
      description: "Join the team building AI automation for Indian SMEs.",
      image: DEFAULT_OG_IMAGE,
    },
  },

  "/partnerships": {
    title: "Partner with Nexby AI | Reseller & Integration Partnerships",
    description:
      "Join the Nexby AI partner programme. Resell or integrate AI telecalling, recruitment, and operations automation. Earn recurring revenue with India's fastest-growing AI platform.",
    canonical: `${BASE_URL}/partnerships`,
    og: {
      title: "Partner with Nexby AI",
      description:
        "Resell or integrate Nexby AI. Earn recurring revenue with India's fastest-growing AI automation platform.",
      url: `${BASE_URL}/partnerships`,
      image: DEFAULT_OG_IMAGE,
    },
    twitter: {
      card: "summary_large_image",
      title: "Partner with Nexby AI",
      description:
        "Resell or integrate Nexby AI. Earn recurring revenue with India's fastest-growing AI automation platform.",
      image: DEFAULT_OG_IMAGE,
    },
  },

  // ── SOLUTIONS ──────────────────────────────────────────────────────────────

  "/solutions/sales": {
    title: "AI for Sales Teams | Automated Lead Follow-Up | Nexby AI",
    description:
      "Nexby AI automates sales follow-up across calls, WhatsApp, and email. Qualify leads 24/7, reduce response time, and improve conversion by 40%. Starting ₹6 per connected call.",
    canonical: `${BASE_URL}/solutions/sales`,
    og: {
      title: "AI for Sales Teams | Nexby AI",
      description:
        "Automate lead follow-up across calls, WhatsApp, and email. 40% better conversion. Starting ₹6 per connected call.",
      url: `${BASE_URL}/solutions/sales`,
      image: DEFAULT_OG_IMAGE,
    },
    twitter: {
      card: "summary_large_image",
      title: "AI for Sales Teams | Nexby AI",
      description:
        "Automate lead follow-up across calls, WhatsApp, and email. 40% better conversion.",
      image: DEFAULT_OG_IMAGE,
    },
  },

  "/solutions/recruitment": {
    title: "AI for Recruitment | AI Screening & Scheduling | Nexby AI",
    description:
      "Nexby AI screens thousands of candidates with AI voice interviews, proctoring, and instant scheduling. Cut hiring time by 90%. Trusted by HR teams across India.",
    canonical: `${BASE_URL}/solutions/recruitment`,
    og: {
      title: "AI for Recruitment | Nexby AI",
      description:
        "Screen thousands of candidates with AI voice interviews. Cut hiring time by 90%.",
      url: `${BASE_URL}/solutions/recruitment`,
      image: DEFAULT_OG_IMAGE,
    },
    twitter: {
      card: "summary_large_image",
      title: "AI for Recruitment | Nexby AI",
      description: "Screen thousands of candidates with AI voice interviews. Cut hiring time by 90%.",
      image: DEFAULT_OG_IMAGE,
    },
  },

  "/solutions/operations": {
    title: "AI for Operations | Workflow Automation for SMEs | Nexby AI",
    description:
      "Nexby AI automates operations workflows — follow-ups, reminders, status updates, and escalations — across voice, WhatsApp, and email. Reduce manual ops by 90%.",
    canonical: `${BASE_URL}/solutions/operations`,
    og: {
      title: "AI for Operations | Nexby AI",
      description:
        "Automate operations workflows across voice, WhatsApp, and email. Reduce manual ops by 90%.",
      url: `${BASE_URL}/solutions/operations`,
      image: DEFAULT_OG_IMAGE,
    },
    twitter: {
      card: "summary_large_image",
      title: "AI for Operations | Nexby AI",
      description: "Automate operations workflows across voice, WhatsApp, and email.",
      image: DEFAULT_OG_IMAGE,
    },
  },

  "/solutions/exhibitions": {
    title: "AI for Exhibition & Trade Show Exhibitors | Nexby AI",
    description:
      "Capture every trade show lead instantly with Expo Insight. AI follow-up across call, WhatsApp, and email — from booth to closed deal. Built for B2B exhibitors in India.",
    canonical: `${BASE_URL}/solutions/exhibitions`,
    og: {
      title: "AI for Exhibitions | Nexby AI",
      description:
        "Capture every trade show lead. AI follow-up from booth to closed deal.",
      url: `${BASE_URL}/solutions/exhibitions`,
      image: DEFAULT_OG_IMAGE,
    },
    twitter: {
      card: "summary_large_image",
      title: "AI for Exhibitions | Nexby AI",
      description: "Capture every trade show lead. AI follow-up from booth to closed deal.",
      image: DEFAULT_OG_IMAGE,
    },
  },

  "/solutions/university-exam-portal": {
    title: "AI Exam Portal for Universities | ExamPilot by Nexby AI",
    description:
      "ExamPilot by Nexby AI delivers secure, AI-proctored online examinations for universities and professional bodies. Scalable to thousands of students, fraud-proof.",
    canonical: `${BASE_URL}/solutions/university-exam-portal`,
    og: {
      title: "AI Exam Portal | ExamPilot by Nexby AI",
      description: "Secure AI-proctored online exams for universities. Scalable, fraud-proof.",
      url: `${BASE_URL}/solutions/university-exam-portal`,
      image: DEFAULT_OG_IMAGE,
    },
    twitter: {
      card: "summary_large_image",
      title: "AI Exam Portal | ExamPilot by Nexby AI",
      description: "Secure AI-proctored online exams for universities. Scalable, fraud-proof.",
      image: DEFAULT_OG_IMAGE,
    },
  },

  // ── GOVERNMENT SOLUTIONS ──────────────────────────────────────────────────

  "/solutions/government/ai-call-assistant": {
    title: "AI Call Assistant for Government | Citizen Query Automation | Nexby AI",
    description:
      "Nexby AI's Government AI Call Assistant handles citizen inbound queries, routes calls, and resolves common requests automatically — reducing call centre load by 70%.",
    canonical: `${BASE_URL}/solutions/government/ai-call-assistant`,
    og: {
      title: "AI Call Assistant for Government | Nexby AI",
      description: "Handle citizen queries automatically. Reduce call centre load by 70%.",
      url: `${BASE_URL}/solutions/government/ai-call-assistant`,
      image: DEFAULT_OG_IMAGE,
    },
    twitter: {
      card: "summary_large_image",
      title: "AI Call Assistant for Government | Nexby AI",
      description: "Handle citizen queries automatically. Reduce call centre load by 70%.",
      image: DEFAULT_OG_IMAGE,
    },
  },

  "/solutions/government/tender-query-automation": {
    title: "Tender Query Automation | AI for Government Procurement | Nexby AI",
    description:
      "Automate vendor queries and tender clarifications with Nexby AI. AI-powered query routing, FAQ responses, and status updates for government procurement teams.",
    canonical: `${BASE_URL}/solutions/government/tender-query-automation`,
    og: {
      title: "Tender Query Automation | Nexby AI",
      description: "AI-powered tender query handling for government procurement.",
      url: `${BASE_URL}/solutions/government/tender-query-automation`,
      image: DEFAULT_OG_IMAGE,
    },
    twitter: {
      card: "summary_large_image",
      title: "Tender Query Automation | Nexby AI",
      description: "AI-powered tender query handling for government procurement.",
      image: DEFAULT_OG_IMAGE,
    },
  },

  "/solutions/government/citizen-ai-interface": {
    title: "Citizen AI Interface | Multilingual AI for Government Services | Nexby AI",
    description:
      "Nexby AI's Citizen AI Interface delivers multilingual, 24/7 AI-powered citizen interactions across voice and chat — making government services accessible and scalable.",
    canonical: `${BASE_URL}/solutions/government/citizen-ai-interface`,
    og: {
      title: "Citizen AI Interface | Nexby AI",
      description: "Multilingual 24/7 AI for government citizen services.",
      url: `${BASE_URL}/solutions/government/citizen-ai-interface`,
      image: DEFAULT_OG_IMAGE,
    },
    twitter: {
      card: "summary_large_image",
      title: "Citizen AI Interface | Nexby AI",
      description: "Multilingual 24/7 AI for government citizen services.",
      image: DEFAULT_OG_IMAGE,
    },
  },

  // ── INDUSTRY SOLUTIONS ────────────────────────────────────────────────────

  "/solutions/industry/real-estate": {
    title: "AI for Real Estate | Lead Follow-Up & Site Visit Automation | Nexby AI",
    description:
      "Nexby AI qualifies real estate leads via AI calls and books site visits automatically. 24/7 follow-up in Hindi and English. Used by builders and brokers across India.",
    canonical: `${BASE_URL}/solutions/industry/real-estate`,
    og: {
      title: "AI for Real Estate | Nexby AI",
      description:
        "AI lead qualification and site visit booking for real estate. 24/7, multilingual.",
      url: `${BASE_URL}/solutions/industry/real-estate`,
      image: DEFAULT_OG_IMAGE,
    },
    twitter: {
      card: "summary_large_image",
      title: "AI for Real Estate | Nexby AI",
      description: "AI lead qualification and site visit booking for real estate.",
      image: DEFAULT_OG_IMAGE,
    },
  },

  "/solutions/industry/manufacturing": {
    title: "AI for Manufacturing | Vendor & Customer Follow-Up Automation | Nexby AI",
    description:
      "Nexby AI automates customer follow-ups, payment reminders, and vendor communications for manufacturing companies. Reduce manual calls by 90%.",
    canonical: `${BASE_URL}/solutions/industry/manufacturing`,
    og: {
      title: "AI for Manufacturing | Nexby AI",
      description:
        "Automate customer follow-ups and vendor communications for manufacturing. Reduce manual calls by 90%.",
      url: `${BASE_URL}/solutions/industry/manufacturing`,
      image: DEFAULT_OG_IMAGE,
    },
    twitter: {
      card: "summary_large_image",
      title: "AI for Manufacturing | Nexby AI",
      description:
        "Automate customer follow-ups and vendor communications for manufacturing.",
      image: DEFAULT_OG_IMAGE,
    },
  },

  "/solutions/industry/pharma": {
    title: "AI for Pharma | Doctor Outreach & MR Follow-Up Automation | Nexby AI",
    description:
      "Nexby AI automates medical representative follow-ups, doctor outreach, and pharmacy communications for pharma companies. Compliant, multilingual, 24/7.",
    canonical: `${BASE_URL}/solutions/industry/pharma`,
    og: {
      title: "AI for Pharma | Nexby AI",
      description:
        "Automate MR follow-ups and doctor outreach for pharma. Compliant, multilingual, 24/7.",
      url: `${BASE_URL}/solutions/industry/pharma`,
      image: DEFAULT_OG_IMAGE,
    },
    twitter: {
      card: "summary_large_image",
      title: "AI for Pharma | Nexby AI",
      description: "Automate MR follow-ups and doctor outreach for pharma.",
      image: DEFAULT_OG_IMAGE,
    },
  },

  // ── PRODUCTS ──────────────────────────────────────────────────────────────

  "/products/expo-insight": {
    title: "Expo Insight | AI Lead Capture for Trade Shows & Exhibitions | Nexby AI",
    description:
      "Expo Insight by Nexby AI captures and qualifies every trade show visitor instantly. Offline-capable booth app with automatic follow-up via call, WhatsApp, and email.",
    canonical: `${BASE_URL}/products/expo-insight`,
    og: {
      title: "Expo Insight | AI Lead Capture | Nexby AI",
      description:
        "Capture and qualify every exhibition visitor. Offline app + automatic follow-up across call, WhatsApp, email.",
      url: `${BASE_URL}/products/expo-insight`,
      image: DEFAULT_OG_IMAGE,
    },
    twitter: {
      card: "summary_large_image",
      title: "Expo Insight | AI Lead Capture | Nexby AI",
      description:
        "Capture and qualify every exhibition visitor. Offline app + automatic follow-up.",
      image: DEFAULT_OG_IMAGE,
    },
  },

  "/products/ai-recruiter": {
    title: "AI Recruiter | Automated Candidate Screening & Interviews | Nexby AI",
    description:
      "AI Recruiter by Nexby AI conducts voice and video interviews, scores candidates, and schedules next steps — automatically. Screen 1,000+ candidates per day.",
    canonical: `${BASE_URL}/products/ai-recruiter`,
    og: {
      title: "AI Recruiter | Nexby AI",
      description:
        "Automated voice and video interviews, candidate scoring, and scheduling. Screen 1,000+ per day.",
      url: `${BASE_URL}/products/ai-recruiter`,
      image: DEFAULT_OG_IMAGE,
    },
    twitter: {
      card: "summary_large_image",
      title: "AI Recruiter | Nexby AI",
      description:
        "Automated voice interviews, candidate scoring, and scheduling. Screen 1,000+ per day.",
      image: DEFAULT_OG_IMAGE,
    },
  },

  "/products/ai-telecaller": {
    title: "AI TeleCaller | AI Voice Calls for Lead Qualification | Nexby AI",
    description:
      "Nexby AI TeleCaller makes AI outbound calls that qualify leads, answer questions, and book appointments. Multilingual, 24/7, billed only on connected calls. Starting ₹6.",
    canonical: `${BASE_URL}/products/ai-telecaller`,
    og: {
      title: "AI TeleCaller | Nexby AI",
      description:
        "AI outbound calls that qualify leads and book appointments. Multilingual, 24/7. Starting ₹6 per connected call.",
      url: `${BASE_URL}/products/ai-telecaller`,
      image: DEFAULT_OG_IMAGE,
    },
    twitter: {
      card: "summary_large_image",
      title: "AI TeleCaller | Nexby AI",
      description:
        "AI outbound calls that qualify leads and book appointments. Starting ₹6 per connected call.",
      image: DEFAULT_OG_IMAGE,
    },
  },

  "/products/salesx": {
    title: "SalesX | AI Sales Intelligence & Pipeline Automation | Nexby AI",
    description:
      "SalesX by Nexby AI gives sales teams full pipeline visibility with AI call analysis, lead scoring, and automated follow-up across every channel.",
    canonical: `${BASE_URL}/products/salesx`,
    og: {
      title: "SalesX | AI Sales Intelligence | Nexby AI",
      description:
        "Full pipeline visibility with AI call analysis, lead scoring, and automated follow-up.",
      url: `${BASE_URL}/products/salesx`,
      image: DEFAULT_OG_IMAGE,
    },
    twitter: {
      card: "summary_large_image",
      title: "SalesX | AI Sales Intelligence | Nexby AI",
      description:
        "Full pipeline visibility with AI call analysis, lead scoring, and automated follow-up.",
      image: DEFAULT_OG_IMAGE,
    },
  },

  "/products/call-analyser": {
    title: "Call Analyser | AI Call Quality & Conversation Intelligence | Nexby AI",
    description:
      "Call Analyser by Nexby AI transcribes, scores, and analyses every sales call automatically. Identify coaching opportunities, track compliance, and improve conversion.",
    canonical: `${BASE_URL}/products/call-analyser`,
    og: {
      title: "Call Analyser | Nexby AI",
      description:
        "AI call transcription, scoring, and analysis. Identify coaching gaps and improve conversion.",
      url: `${BASE_URL}/products/call-analyser`,
      image: DEFAULT_OG_IMAGE,
    },
    twitter: {
      card: "summary_large_image",
      title: "Call Analyser | Nexby AI",
      description:
        "AI call transcription, scoring, and analysis. Identify coaching gaps and improve conversion.",
      image: DEFAULT_OG_IMAGE,
    },
  },

  "/products/support-assist": {
    title: "SupportAssist | AI Customer Support Automation | Nexby AI",
    description:
      "SupportAssist by Nexby AI handles customer support queries via AI voice and chat — resolving common issues instantly and escalating complex ones to human agents.",
    canonical: `${BASE_URL}/products/support-assist`,
    og: {
      title: "SupportAssist | AI Customer Support | Nexby AI",
      description:
        "AI voice and chat for customer support. Instant resolution of common queries, smart escalation.",
      url: `${BASE_URL}/products/support-assist`,
      image: DEFAULT_OG_IMAGE,
    },
    twitter: {
      card: "summary_large_image",
      title: "SupportAssist | AI Customer Support | Nexby AI",
      description:
        "AI voice and chat for customer support. Instant resolution, smart escalation.",
      image: DEFAULT_OG_IMAGE,
    },
  },
};

export function getSEO(pathname: string): SEOMeta {
  // Normalize: strip trailing slash (except for root "/")
  const normalized = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  let seo = seoConfig[normalized];

  if (!seo) {
    // Fallback default meta
    seo = {
      title: "Nexby AI — AI-Powered Automation for Indian SMEs",
      description:
        "Nexby AI builds done-for-you omnichannel AI automation for Indian SMEs — AI telecalling, WhatsApp, and email follow-up. Starting ₹6 per connected call.",
      canonical: `https://nexby.ai${normalized}`,
      og: {
        title: "Nexby AI — AI-Powered Automation for Indian SMEs",
        description:
          "Done-for-you AI telecalling, WhatsApp, and email automation. Starting ₹6 per connected call.",
        url: `https://nexby.ai${normalized}`,
        image: "https://nexby.ai/images/og-default.png",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "Nexby AI — AI-Powered Automation for Indian SMEs",
        description: "Done-for-you AI automation. Starting ₹6 per connected call.",
        image: "https://nexby.ai/images/og-default.png",
      },
    };
  } else {
    // Clone so we don't mutate the static config object
    seo = { ...seo };
  }

  // Generate dynamic schemas
  const schemas: Record<string, unknown>[] = [];

  // 1. Breadcrumbs
  if (normalized !== "/") {
    const parts = normalized.split("/").filter(Boolean);
    const breadcrumbItems = parts.map((part, index) => {
      const url = "https://nexby.ai/" + parts.slice(0, index + 1).join("/");
      // Convert "ai-recruiter" -> "Ai Recruiter"
      const name = part
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      return { name, url };
    });
    // Add Home as first item
    breadcrumbItems.unshift({ name: "Home", url: "https://nexby.ai" });
    schemas.push(breadcrumbSchema(breadcrumbItems));
  }

  // 2. Service & FAQ Schemas for product/solution/industry pages
  const isServicePage =
    normalized.startsWith("/products/") ||
    normalized.startsWith("/solutions/") ||
    normalized.startsWith("/industries/");

  if (isServicePage && !normalized.endsWith("/thank-you")) {
    schemas.push(
      serviceSchema({
        name: seo.title.split("—")[0].trim() || seo.title,
        description: seo.description,
        url: seo.canonical,
      })
    );
    schemas.push(faqPageSchema(globalFAQs));
  }

  if (schemas.length > 0) {
    seo.schema = schemas;
  }

  return seo;
}


