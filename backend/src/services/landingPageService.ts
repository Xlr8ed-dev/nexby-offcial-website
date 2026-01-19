import { query } from '../config/db';
import { LandingPage } from '../types';

export const getLandingPageBySlug = async (slug: string): Promise<LandingPage | null> => {
    const result = await query(
        `SELECT * FROM landing_pages WHERE slug = $1 AND status = 'published'`,
        [slug]
    );

    if (result.rows.length === 0) {
        return null;
    }

    return result.rows[0] as LandingPage;
};

export const getLandingPageById = async (id: string | number): Promise<LandingPage | null> => {
    const result = await query(
        `SELECT * FROM landing_pages WHERE id = $1`,
        [id]
    );

    if (result.rows.length === 0) {
        return null;
    }

    return result.rows[0] as LandingPage;
};
