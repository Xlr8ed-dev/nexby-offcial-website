-- Up Migration

CREATE TABLE landing_pages (
  id BIGSERIAL PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  product_code TEXT,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  seo_meta_title TEXT,
  seo_meta_desc TEXT,
  layout_json JSONB NOT NULL,
  form_json JSONB NOT NULL,
  thank_you_json JSONB NOT NULL,
  tracking_json JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_landing_pages_slug ON landing_pages(slug);

CREATE TABLE leads (
  id BIGSERIAL PRIMARY KEY,
  landing_page_id BIGINT NOT NULL REFERENCES landing_pages(id),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  -- Optional extracted fields
  name TEXT,
  email TEXT,
  phone TEXT,
  -- Dynamic payload
  payload_json JSONB NOT NULL,
  -- Attribution
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  utm_term TEXT,
  utm_content TEXT,
  -- Click IDs
  gclid TEXT,
  fbclid TEXT,
  click_id TEXT,
  -- Technical
  source_ip INET,
  user_agent TEXT
);

CREATE INDEX idx_leads_landing_page_id ON leads(landing_page_id);
CREATE INDEX idx_leads_created_at ON leads(created_at);
