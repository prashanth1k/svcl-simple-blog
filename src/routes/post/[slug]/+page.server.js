export const load = async ({ params }) => {
	const id = params.slug;
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
	const post = await res.json();
	return {
		post
	};
};
