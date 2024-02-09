<script lang="ts">
	import { createDropdownMenu, melt } from '@melt-ui/svelte';
	import { setContext, type Snippet } from 'svelte';
	import { key } from './index';

	const ctx = createDropdownMenu();

	setContext(key, ctx);

	let { children } = $props<{
		children: Snippet;
	}>();
</script>

{@render children()}
