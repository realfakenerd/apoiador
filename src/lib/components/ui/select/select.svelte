<script lang="ts">
	import {createSelect} from '@melt-ui/svelte';
	import { key } from './index';
	import { setContext, type Snippet } from 'svelte';

	const ctx = createSelect();

	setContext(key, ctx);

	let {children} = $props<{
		children: Snippet
	}>()
</script>

{@render children()}