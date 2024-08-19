import { redirect, fail } from '@sveltejs/kit';

import type { Actions } from './$types';

export const actions: Actions = {
	signup: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();
		const email = formData.get('email') as string;
		const password = formData.get('senha') as string;

		const { error } = await supabase.auth.signUp({ email, password });
		if (error) {
			console.error(error);
			return redirect(303, '/auth/error');
		} else {
			return redirect(303, '/');
		}
	},
	login: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();
		const email = formData.get('email') as string;
		const password = formData.get('senha') as string;

		const { error } = await supabase.auth.signInWithPassword({ email, password });
		if (error) {
			console.error(error);
			return redirect(303, '/auth/error');
		} else {
			return redirect(303, '/perfil');
		}
	},
	provider_login: async ({ locals: { supabase } }) => {
		const { data, error } = await supabase.auth.signInWithOAuth({
			provider: 'google'
		});

		if (data.url) return redirect(303, data.url);

		return fail(400, { message: error?.message });
	}
};
