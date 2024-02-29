import * as dotenv from 'dotenv';
import type { Config } from 'drizzle-kit';

dotenv.config();

export default {
	schema: './src/db/schema',
	driver: 'better-sqlite',
	out: './src/db/migrations/'
};
