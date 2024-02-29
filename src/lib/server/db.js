import Database from 'better-sqlite3';
import { DB_URL } from '$env/static/private';
import { drizzle } from 'drizzle-orm/better-sqlite3';

const sqlite = new Database(DB_URL);
const db = drizzle(sqlite);

export { db };
