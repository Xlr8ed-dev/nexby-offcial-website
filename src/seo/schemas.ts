// ─────────────────────────────────────────────────────────────────────────────
// Nexby AI — JSON-LD Schema Library
// All schemas use resolved real values (no placeholders).
// ─────────────────────────────────────────────────────────────────────────────

// ── SITEWIDE SCHEMAS (injected once in App.tsx) ───────────────────────────────

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nexby AI Solutions Private Limited",
  url: "https://nexby.ai",
  logo: "https://nexby.ai/images/logo.png",
  description:
    "Nexby AI is a service-based AI automation company for Indian SMEs. It builds and manages done-for-you omnichannel lead follow-up systems across AI telecalling, WhatsApp, and email. Pricing starts at ₹6 per connected call, billed only when a call connects.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "15, Khatau Building, 44 Bank Street",
    addressLocality: "Mumbai",
    postalCode: "400001",
    addressCountry: "IN",
  },
  sameAs: [
    "https://linkedin.com/company/nexby-ai/",
    "https://www.instagram.com/nexby.ai/",
    "https://www.youtube.com/@NexbyAISolutions",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9892048816",
    email: "hello@nexby.ai",
    contactType: "sales",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi"],
  },
};

export const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Nexby AI",
  url: "https://nexby.ai",
  description:
    "AI-powered automation for Indian SMEs — telecalling, WhatsApp, email follow-up, and recruitment.",
};

// ── SERVICE SCHEMAS (per product/solution page) ───────────────────────────────

interface ServiceSchemaOptions {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
  areaServed?: string;
}

export function serviceSchema({
  name,
  description,
  url,
  serviceType = "AI Automation",
  areaServed = "IN",
}: ServiceSchemaOptions) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    serviceType,
    provider: {
      "@type": "Organization",
      name: "Nexby AI Solutions Private Limited",
      url: "https://nexby.ai",
    },
    areaServed,
    availableLanguage: ["English", "Hindi"],
  };
}

// ── FAQPAGE SCHEMA ─────────────────────────────────────────────────────────────

interface FAQItem {
  question: string;
  answer: string;
}

export function faqPageSchema(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

// ── BREADCRUMB SCHEMA ──────────────────────────────────────────────────────────

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// ── PRE-BUILT COMMON FAQS ──────────────────────────────────────────────────────

export const globalFAQs: FAQItem[] = [
  {
    question: "How much does Nexby AI's telecalling service cost?",
    answer:
      "Pricing starts at ₹6 per connected call. You are billed only when a call connects — there is no charge for unanswered or unconnected calls.",
  },
  {
    question: "What does Nexby AI do?",
    answer:
      "Nexby AI is a service-based AI automation company for Indian SMEs. It builds and manages omnichannel lead follow-up systems across AI telecalling, WhatsApp, and email, plus a dashboard for full visibility across every channel.",
  },
  {
    question: "Which industries does Nexby AI serve?",
    answer:
      "Nexby AI serves real estate, manufacturing, pharmaceuticals, government, BPO, banking, exhibitions, and any Indian SME that needs to automate lead follow-up and customer communication at scale.",
  },
  {
    question: "Is Nexby AI multilingual?",
    answer:
      "Yes. Nexby AI supports English and Hindi out of the box, with additional regional languages available on request.",
  },
  {
    question: "How quickly can I get started with Nexby AI?",
    answer:
      "Most businesses go live within a week. The Nexby team handles setup, integration, and script creation — you do not need a technical team.",
  },
];
