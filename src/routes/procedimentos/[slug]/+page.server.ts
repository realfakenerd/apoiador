import type { PageServerLoad } from "./$types";

export const load = (async({params}) => {
    return {
        post: params.slug
    }
}) satisfies PageServerLoad