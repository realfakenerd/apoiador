import type { Actions } from './$types';
import { createTransport } from 'nodemailer';
export const prerender = false;
export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();

		console.log(formData);

		// const email = 'lucas210898@hotmail.com'

		// const mailer = createTransport({ 89354372  34191090080184793002935497770004395610000025696
		// 	service: 'hotmail',
		// 	auth: {
		// 		user: email,
		// 		pass: '#',
		// 	}
		// })

		// const message = await mailer.sendMail({
		// 	from: email,
		// 	to: 'apoio2.captacao@apsa.com.br',
		// 	html: `<section class="p-4">
		// 	<article class="card max-w-none bg-surface-variant prose prose-zinc">
		// 		<h1>Hello World</h1>
		// 	</article>
		// </section>`,
		// 	subject: 'teste do nodemailer'
		// })
		// console.log(message);
	}
};