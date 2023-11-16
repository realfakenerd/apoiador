import { getPost } from '$lib/markdown/post';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	const post = await getPost(params.slug);
	console.log(post);

	return {
		fm: post.fm,
		content: post.content
	};
}) satisfies PageServerLoad;
