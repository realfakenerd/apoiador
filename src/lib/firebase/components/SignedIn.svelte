<script lang="ts">
	import { userStore } from '$lib/firebase/store/auth.svelte';
	import { getFirebaseContext } from '$lib/firebase/store/skd';
	import { signOut, type Auth, type User } from 'firebase/auth';
	import type { Snippet } from 'svelte';

	const auth = getFirebaseContext().auth!;
	const user = userStore(auth);

	let { children } = $props<{
		children: Snippet<[{ user: User; auth: Auth; signOut: () => Promise<void> }]>;
	}>();
</script>

{#if user}
	{@render children({ user, auth, signOut: () => signOut(auth) })}
{/if}
