import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import supabase from '$lib/supabase'

export const GET = (async () => {

	let { data: condominios, error } = await supabase
		.from('condominios')
		.select('*')

	console.log(condominios);

	return json(condominios ?? []);
}) satisfies RequestHandler;
