import { sql } from 'drizzle-orm';
import { text, sqliteTable, integer } from 'drizzle-orm/sqlite-core';
import { user } from './user.js';
const session = sqliteTable('session', {
	id: integer('id').unique().notNull().primaryKey({ autoIncrement: true }),
	createdAt: text('created_at')
		.notNull()
		.default(sql`CURRENT_TIMESTAMP`),
	updatedAt: text('updated_at')
		.notNull()
		.default(sql`CURRENT_TIMESTAMP`),
	expiresAt: integer('expires_at').notNull(),
	userId: integer('user_id').references(() => user.id)
});

export { session };
