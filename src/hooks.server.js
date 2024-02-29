import { SvelteKitAuth } from '@auth/sveltekit';
import GitHub from '@auth/sveltekit/providers/github';
import { GITHUB_ID, GITHUB_SECRET } from '$env/static/private';
import { sequence } from '@sveltejs/kit/hooks';

import { redirect } from '@sveltejs/kit';

async function authorization({ event, resolve }) {
	if (event.url.pathname.startsWith('/authenticated')) {
		const session = await event.locals.getSession();
		if (!session) {
			throw redirect(303, '/auth');
		}
	}
	return resolve(event);
}

// export const { handle, signIn, signOut } = sequence(
// 	SvelteKitAuth({
// 		providers: [GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET })]
// 	}),
// 	authorization
// );

export { handle } from './auth';
