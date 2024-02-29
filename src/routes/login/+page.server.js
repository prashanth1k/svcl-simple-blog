import { signIn } from '../../auth';
export const actions = { default: signIn };
import { redirect } from '@sveltejs/kit';

export const load = async (event) => {
	const session = await event.locals.getSession();
	if (session?.user) throw redirect(303, '/');
	return {};
};
