export interface LandingPage {
    id: string; // BigInt returns as string
    slug: string;
    name: string;
    product_code?: string;
    status: 'draft' | 'published' | 'archived';
    seo_meta_title?: string;
    seo_meta_desc?: string;
    layout_json: any;
    form_json: {
        title?: string;
        submitLabel?: string;
        fields: FormField[];
    };
    thank_you_json: any;
    tracking_json?: any;
    created_at: Date;
    updated_at: Date;
}

export interface FormField {
    name: string;
    label: string;
    type: string;
    required?: boolean;
    options?: string[];
}

export interface Lead {
    id: string;
    landing_page_id: string;
    created_at: Date;
    name?: string;
    email?: string;
    phone?: string;
    payload_json: any;
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
    utm_term?: string;
    utm_content?: string;
    gclid?: string;
    fbclid?: string;
    click_id?: string;
    source_ip?: string;
    user_agent?: string;
}

export interface CreateLeadDTO {
    landingPageId: string | number;
    values: Record<string, any>;
    utm?: {
        utm_source?: string;
        utm_medium?: string;
        utm_campaign?: string;
        utm_term?: string;
        utm_content?: string;
    };
    clickData?: {
        gclid?: string;
        fbclid?: string;
        click_id?: string;
    };
    sourceIp?: string;
    userAgent?: string;
}
