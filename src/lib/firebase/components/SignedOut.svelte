<script lang="ts">
	import type { Auth } from 'firebase/auth';
	import type { Snippet } from 'svelte';
	import { userStore } from '../store/auth.svelte';
	import { getFirebaseContext } from '../store/skd';

	const auth = getFirebaseContext().auth!;
	const user = userStore(auth);

	let { children } = $props<{
		children: Snippet<[{ auth: Auth }]>;
	}>();
</script>

{#if !user}
	{@render children({ auth })}
{/if}
