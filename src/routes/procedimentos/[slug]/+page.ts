import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	const procedimento = await import(`../../../procedimentos/${params.slug}.md`);
	return {
		meta: procedimento.metadata as Post,
		component: procedimento.default
	};
}) satisfies PageLoad;
