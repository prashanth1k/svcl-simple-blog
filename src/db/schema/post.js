import { sql } from 'drizzle-orm';
import { text, sqliteTable, integer } from 'drizzle-orm/sqlite-core';
const post = sqliteTable('post', {
	id: integer('id').unique().notNull().primaryKey({ autoIncrement: true }),
	createdAt: text('created_at')
		.notNull()
		.default(sql`CURRENT_TIMESTAMP`),
	updatedAt: text('updated_at')
		.notNull()
		.default(sql`CURRENT_TIMESTAMP`),
	title: text('title').notNull(),
	content: text('content').notNull(),
	publishedAt: text('published_at'),
	status: text('status').notNull().default('Draft')
});

export { post };
