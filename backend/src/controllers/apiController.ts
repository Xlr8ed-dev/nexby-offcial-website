import { Request, Response } from 'express';
import * as lpService from '../services/landingPageService';
import * as leadService from '../services/leadService';
import { CreateLeadDTO } from '../types';

export const getLandingPage = async (req: Request, res: Response) => {
    try {
        const { slug } = req.params;
        const lp = await lpService.getLandingPageBySlug(slug);

        if (!lp) {
            return res.status(404).json({ error: 'Landing page not found' });
        }

        // Transform to clean API shape
        const response = {
            id: lp.id,
            slug: lp.slug,
            seo: {
                metaTitle: lp.seo_meta_title,
                metaDescription: lp.seo_meta_desc,
            },
            layout: lp.layout_json,
            form: lp.form_json,
            thankYou: lp.thank_you_json,
            tracking: lp.tracking_json,
        };

        res.json(response);
    } catch (error) {
        console.error('Error fetching landing page:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const submitForm = async (req: Request, res: Response) => {
    try {
        const { landingPageId, values, utm, clickData } = req.body;

        if (!landingPageId || !values) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // 1. Fetch Landing Page to validate form
        const lp = await lpService.getLandingPageById(landingPageId);
        if (!lp) {
            return res.status(404).json({ error: 'Landing page not found' });
        }

        // 2. Validate required fields
        if (lp.form_json && lp.form_json.fields) {
            for (const field of lp.form_json.fields) {
                if (field.required && !values[field.name]) {
                    return res.status(400).json({ error: `Missing required field: ${field.label || field.name}` });
                }
            }
        }

        // 3. Create Lead
        const leadDTO: CreateLeadDTO = {
            landingPageId,
            values,
            utm,
            clickData,
            sourceIp: req.ip || req.socket.remoteAddress,
            userAgent: req.get('User-Agent'),
        };

        await leadService.createLead(leadDTO);

        // 4. Return success and thank you payload
        res.json({
            success: true,
            thankYou: lp.thank_you_json,
        });
    } catch (error) {
        console.error('Error submitting form:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
