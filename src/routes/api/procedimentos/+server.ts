import { json } from '@sveltejs/kit';
import { getPosts } from '$lib/markdown/post';
import type { RequestHandler } from './$types';

export const GET = (async () => {
	const posts = await getPosts();
	return json(posts);
}) satisfies RequestHandler;