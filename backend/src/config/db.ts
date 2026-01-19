import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

pool.on('error', (err) => {
    console.error('Unexpected error on idle client', err);
    process.exit(-1);
});

export const query = (text: string, params?: any[]) => pool.query(text, params);
export const getClient = () => pool.connect();

// Helper to initialize DB (for dev/test purposes)
import fs from 'fs';
import path from 'path';

export const initDb = async () => {
    const client = await pool.connect();
    try {
        const schema = fs.readFileSync(path.join(__dirname, '../db/schema.sql'), 'utf8');
        await client.query(schema);
        console.log('Database initialized successfully');
    } catch (error) {
        console.error('Error initializing database', error);
    } finally {
        client.release();
    }
};
