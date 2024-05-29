<script lang="ts">
	import type { Auth } from 'firebase/auth';
	import type { Snippet } from 'svelte';
	import { userStore } from '../store/auth.svelte';
	import { getFirebaseContext } from '../store/sdk';

	const auth = getFirebaseContext().auth!;
	const user = userStore(auth);

	let {
		children
	}: {
		children: Snippet<[{ auth: Auth }]>;
	} = $props();
</script>

{#if !user}
	{@render children({ auth })}
{/if}
