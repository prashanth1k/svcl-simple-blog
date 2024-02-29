import { post } from '../../src/db/schema/post.js';
import { db } from '../../src/lib/server/db.js';
export async function load() {
	const posts = await db.select().from(post);
	return { posts };
}
