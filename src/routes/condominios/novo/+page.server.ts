import { transformToNestedObject } from '$lib/utils';
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request, fetch }) => {
		const formData = await request.formData();
		const data = Object.fromEntries(formData);
		const formatedData = transformToNestedObject<Omit<Condominio, 'condominio_id'>>(data);

		try {
			const response = await fetch('/api/condominio', {
				method: 'POST',
				body: JSON.stringify({ condominio_id: crypto.randomUUID(), ...formatedData })
			});

			if (response.ok) {
				const data = await response.json();
				console.log(data);
				

				return {
					nome: formatedData.nome
				};
			}
		} catch (error) {
			const err = error as Error;
			fail(302, { error: err.message });
		}
	}
};
