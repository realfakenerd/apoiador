import { fetchJSON } from '$lib/markdown/post';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

interface ContentType {
	content: string;
	fm: Record<string, any>;
}

export const prerender = true;
export const load = (async ({ fetch, params }) => {
	try {
		const post = await fetchJSON<ContentType>(`/api/procedimentos/${params.slug}.json`, fetch);
		return {
			content: post.content,
			meta: post.fm
		};
	} catch (e) {
		throw error(404, `Could not find ${params.slug}`);
	}
}) as PageServerLoad;