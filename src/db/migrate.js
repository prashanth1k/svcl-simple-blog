import Database from 'better-sqlite3';
import * as dotenv from 'dotenv';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import { migrate } from 'drizzle-orm/better-sqlite3/migrator';

console.log('Migrations initializing..');
dotenv.config();

const sqlite = new Database(process.env.DB_URL);
const db = drizzle(sqlite);
migrate(db, { migrationsFolder: './src/db/migrations' });
// TODO: check validity here
sqlite.pragma('journal_mode = WAL');

console.log('Migrations completed');
process.exit(0);
