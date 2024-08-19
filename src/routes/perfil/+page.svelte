<script lang="ts">
	import Textfield from '$lib/components/Textfield.svelte';
	import { buttonVariants } from '$lib/utils.js';

	let { data } = $props();

	const { supabase, user } = data;

	let email = $state(user?.email ?? '');
	let phone = $state(user?.phone ?? '');
	let display_name = $state<string>(user?.user_metadata.display_name ?? '');

	async function logout() {
		await supabase.auth.signOut();
	}

	async function updateData() {
		const { data, error } = await supabase.auth.updateUser({
			data: {
				avatar_image:
					'https://lh3.googleusercontent.com/a/ACg8ocLX4vDyJ_JrKGxcFk_nhw5A-ALsXLWeMTtvnOCHgS3J0444Zm2-AQ=s83-c-mo'
			}
		});

		console.log(data);

		if (error) {
			console.warn(error);
		}
	}
</script>

<section class="p-10 flex items-center">
	<form class="p-4 rounded-lg ring ring-border bg-background w-full flex flex-col gap-6">
		<Textfield leading-icon="mdi:email" label="E-mail" bind:value={email} type="email" />
		<Textfield leading-icon="mdi:phone" label="Telefone" bind:value={phone} type="tel" />
		<Textfield leading-icon="mdi:person" label="Seu nome" bind:value={display_name} type="text" />
		<Textfield
			leading-icon="mdi:password"
			required
			label="Senha"
			autocomplete="new-password"
			minlength={6}
			type="password"
		/>
		<button type="submit" onclick={updateData}>Update</button>
		<button class={buttonVariants({ variant: 'destructive' })} onclick={logout}>Logout</button>
		<button
			class={buttonVariants({ variant: 'destructive' })}
			onclick={() => supabase.auth.linkIdentity({ provider: 'google' })}>google</button
		>
	</form>
</section>
