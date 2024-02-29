import { sql } from 'drizzle-orm';
import { text, sqliteTable, integer } from 'drizzle-orm/sqlite-core';
const user = sqliteTable('users', {
	id: integer('id').unique().notNull().primaryKey({ autoIncrement: true }),
	createdAt: text('created_at')
		.notNull()
		.default(sql`CURRENT_TIMESTAMP`),
	updatedAt: text('updated_at')
		.notNull()
		.default(sql`CURRENT_TIMESTAMP`),
	username: text('username').notNull().unique(),
	email: text('email').notNull(),
	password: text('password').notNull(),
	role: text('role').notNull().default('user')
});

export { user };
