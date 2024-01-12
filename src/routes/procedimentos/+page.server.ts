import type { PageServerLoad } from './$types';

export const prerender = true;
export const load: PageServerLoad = async () => {
	let procedimentos: Post[] = [];
	const paths = import.meta.glob(`/src/procedimentos/*.md`, { eager: true });
	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Post, 'slug'>;
			const post = { ...metadata, slug } satisfies Post;
			post.published && procedimentos.push(post);
		}
	}
	return { procedimentos };
};
