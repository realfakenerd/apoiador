import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const GET = (async () => {
    console.log('');
    

    return json({'ss': 'ss'})
}) satisfies RequestHandler;