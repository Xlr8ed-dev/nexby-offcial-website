-- Seed data for Sales AI Landing Page

INSERT INTO landing_pages (slug, name, product_code, status, seo_meta_title, seo_meta_desc, layout_json, form_json, thank_you_json, tracking_json)
VALUES (
  'sales-ai-2025',
  'Nexby Sales AI',
  'sales_ai',
  'published',
  'Nexby Sales AI | Automate Your Sales Growth',
  'Automate your sales with Nexby Sales AI. Prospect, engage, and qualify leads 24/7 without human intervention.',
  '{
    "theme": "sales-blue",
    "sections": [
      {
        "type": "hero",
        "props": {
          "headline": "Losing Leads Before Your Sales Team Even Makes the First Call?",
          "subheadline": "Not Anymore. Automate your sales with Nexby Sales AI. Prospect, engage, and qualify leads 24/7 without human intervention.",
          "ctaLabel": "Book Free Demo"
        }
      },
      {
        "type": "problem_awareness",
        "props": {
          "headline": "Your sales team isn''t losing deals because of poor performance. They are losing them due to:",
          "points": [
            "Missed Follow-ups (Latency kills deals)",
            "Delayed Responses (5 minutes is too late)",
            "Manual Prospecting (Wasting time on research)",
            "Language Barriers (Losing regional/global deals)",
            "Slow Qualification (Chasing tire-kickers)"
          ],
          "realityCheck": "The Reality Check: While your team sleeps, your competitors are reaching your prospects.",
          "subtext": "Do you wonder how they are doing it?",
          "ctaLabel": "Book Free Consultation",
          "ctaHref": "#hero-form"
        }
      },
      {
        "type": "agitation",
        "props": {
          "headline": "Every delay in outreach is a leak in your revenue bucket.",
          "items": [
            { "title": "Prospects slip through", "desc": "without engaging." },
            { "title": "Lead lists grow stale", "desc": "within hours." },
            { "title": "Teams waste hours", "desc": "chasing cold contacts." },
            { "title": "Conversion rates plunge", "desc": "by up to 400%." }
          ],
          "closingStatement": "Avoid these pitfalls today. Maximize your conversion rates instantly.",
          "ctaLabel": "I Want to Automate My Sales!",
          "ctaHref": "#hero-form"
        }
      },
      {
        "type": "impact",
        "props": {
          "headline": "How Nexby Sales AI Accelerates Growth",
          "stats": [
            { "value": "25%", "label": "More Revenue", "subtext": "Through higher conversions" },
            { "value": "15", "label": "Man-Hours Saved/Week", "subtext": "With automated tasks" },
            { "value": "35%", "label": "Higher Productivity", "subtext": "Across pre-sales teams" },
            { "value": "3x", "label": "Scalability", "subtext": "Without increasing manpower" },
            { "value": "3x", "label": "Faster Market Response", "subtext": "With real-time insights" }
          ]
        }
      },
      {
        "type": "how_it_works",
        "props": {
          "headline": "From \"Cold Contact\" to \"Closed Deal\" — Autonomously.",
          "subheadline": "Nexby can prospect, engage, qualify, nurture, and follow up across languages and channels without human intervention.",
          "steps": [
            { "title": "Instant Training", "desc": "We ingest your company offerings. The AI learns your products and services instantly for accurate communication." },
            { "title": "Smart Lead Nurturing", "desc": "AI-driven engagement customizes every message based on user behavior for higher conversions." },
            { "title": "Automated Follow-Ups", "desc": "It sends timely emails, WhatsApp messages & reminders automatically. No lead is ever \"forgotten.\"" },
            { "title": "Efficient Lead Management", "desc": "It scores, prioritizes & categorizes leads so your team only talks to the \"Hot\" ones." },
            { "title": "Real-Time Insights", "desc": "Track engagement, interest levels & sales readiness instantly on your dashboard." }
          ],
          "ctaLabel": "Watch Nexby In Action!",
          "ctaHref": "#hero-form"
        }
      },
      {
        "type": "features",
        "props": {
          "features": [
            { "title": "24/7 Active", "desc": "Never miss a lead again. The AI agent works nights, weekends, and holidays." },
            { "title": "Multilingual & Multichannel", "desc": "Reach prospects on Email, WhatsApp, or Voice in their native language." },
            { "title": "AI-Driven Qualification", "desc": "Filters prospects based on genuine interest. Stop wasting time on bad leads." },
            { "title": "Automated Follow-Ups", "desc": "Zero missed reminders. Zero forgotten leads." },
            { "title": "CRM Integration", "desc": "Plugs effortlessly into Salesforce, HubSpot, Zoho, and more." },
            { "title": "Smart Profiling", "desc": "Better segmentation and targeting for surgical precision in sales." },
            { "title": "Adaptive Learning", "desc": "Nexby learns from every interaction. It gets smarter as your business evolves." }
          ]
        }
      },
      {
        "type": "omnichannel",
        "props": {
          "headline": "Implement Nexby Across Every Touchpoint.",
          "items": [
            { "desc": "Convert visitors instantly with an AI agent that qualifies & captures leads in real-time." },
            { "desc": "Deliver personalized messages, brochures, and reminders on the world''s most responsive channel." },
            { "desc": "Call thousands of prospects simultaneously to qualify leads and schedule appointments." },
            { "desc": "Capture and nurture leads from Facebook, Instagram, & LinkedIn instantly." }
          ],
          "ctaLabel": "Get Started Today",
          "ctaHref": "#hero-form"
        }
      },
      {
        "type": "social_proof",
        "props": {
          "headline": "Our Success Stories"
        }
      }
    ]
  }',
  '{
    "title": "Get 35% Higher Productivity In Sales!",
    "subtext": "Watch Nexby Sales AI In Action.",
    "submitLabel": "Book Free Demo",
    "fields": [
      { "name": "name", "label": "Full Name", "type": "text", "required": true, "placeholder": "John Doe" },
      { "name": "phone", "label": "Contact Number", "type": "tel", "required": true, "placeholder": "+91 99999 99999" },
      { "name": "email", "label": "Email Address", "type": "email", "required": true, "placeholder": "john@company.com" },
      { "name": "industry", "label": "Industry", "type": "select", "required": true, "options": ["Real Estate", "Education", "Healthcare", "Finance", "Retail", "Technology", "Other"] },
      { "name": "message", "label": "Message", "type": "textarea", "required": false, "placeholder": "Tell us about your requirements..." }
    ]
  }',
  '{
    "type": "inline",
    "headline": "Thank you! Your request has been received.",
    "subtext": "Our team will contact you shortly to schedule your free demo.",
    "fireEvents": ["lead_submitted"]
  }',
  '{}'
);
