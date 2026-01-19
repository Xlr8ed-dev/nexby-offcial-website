import { query } from '../config/db';
import { CreateLeadDTO, Lead } from '../types';

export const createLead = async (data: CreateLeadDTO): Promise<Lead> => {
    const {
        landingPageId,
        values,
        utm = {},
        clickData = {},
        sourceIp,
        userAgent,
    } = data;

    // Extract common fields if they exist
    const name = values['name'] || values['fullName'] || null;
    const email = values['email'] || values['workEmail'] || null;
    const phone = values['phone'] || values['mobile'] || null;

    const result = await query(
        `INSERT INTO leads (
      landing_page_id,
      name,
      email,
      phone,
      payload_json,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_term,
      utm_content,
      gclid,
      fbclid,
      click_id,
      source_ip,
      user_agent
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)
    RETURNING *`,
        [
            landingPageId,
            name,
            email,
            phone,
            JSON.stringify(values),
            utm.utm_source,
            utm.utm_medium,
            utm.utm_campaign,
            utm.utm_term,
            utm.utm_content,
            clickData.gclid,
            clickData.fbclid,
            clickData.click_id,
            sourceIp,
            userAgent,
        ]
    );

    return result.rows[0] as Lead;
};
