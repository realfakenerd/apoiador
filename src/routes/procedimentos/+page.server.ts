import type { PageServerLoad } from './$types';

export const prerender = true;


/**
 * The `interface ContentType` is defining the structure of an object that represents a file
 * with frontmatter. It has the following properties
 *
 * @param metadata a combination of the file's frontmatter and the file's slug
 * @param default a Record with the keys being the function names and the values being functions with arguments and return types
 */
interface ContentType {
	metadata: Post;
	default: {
		[key: string]: (args: {
			params: {
				slug: string;
			};
		}) => Promise<unknown>;
	};
}


export const load = (async () => {
	let procedimentos = [];
	const paths = import.meta.glob<ContentType>(`/src/procedimentos/*.md`);
	for (const path in paths) {
		const file = await paths[path]();

		const slug = path.split('/').at(-1)?.replace('.md', '');
		console.log(slug);
		

		if (file && slug) {
			const metadata = file.metadata as Post;			
			const post = { ...metadata, slug } satisfies Post & { slug: string };
			post.published && procedimentos.push(post);
		}
	}
	return { procedimentos };
}) satisfies PageServerLoad;
