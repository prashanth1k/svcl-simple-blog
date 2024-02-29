import { redirect } from '@sveltejs/kit';
import { db } from '../../../lib/server/db';
import { post } from '../../../db/schema/post';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		console.log('title:', data.get('title'));
		const res = await db
			.insert(post)
			.values({ title: data.get('title'), content: data.get('content') })
			.returning();

		console.log('res: ', res);
	}
};

export const load = async (event) => {
	const session = await event.locals.getSession();
	if (!session?.user) throw redirect(303, '/login');
	return {};
};
