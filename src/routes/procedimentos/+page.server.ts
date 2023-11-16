import { fetchJSON } from '$lib/markdown/post';
import type { PageServerLoad } from './$types';

export const prerender = true;
export const load = (async ({ fetch }) => {
	const res = await fetchJSON<Post[]>('/api/procedimentos', fetch);
	const published = res.filter(({ draft }) => !draft);
	return { procedimentos: published };
}) satisfies PageServerLoad;
