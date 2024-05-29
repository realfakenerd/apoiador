<script lang="ts">
	import { userStore } from '$lib/firebase/store/auth.svelte';
	import { getFirebaseContext } from '$lib/firebase/store/sdk';
	import { signOut, type Auth, type User } from 'firebase/auth';
	import type { Snippet } from 'svelte';

	const auth = getFirebaseContext().auth!;
	const user = userStore(auth);

	let {
		children
	}: {
		children: Snippet<[{ user: User; auth: Auth; signOut: () => Promise<void> }]>;
	} = $props();
</script>

{#if user}
	{@render children({ user, auth, signOut: () => signOut(auth) } as any)}
{/if}
