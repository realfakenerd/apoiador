<script lang="ts">
	import { createDropdownMenu } from '@melt-ui/svelte';
	import { setContext, type Snippet } from 'svelte';
	import { key } from './index';

	interface Props {
		children: Snippet;
	}

	const ctx = createDropdownMenu({
		forceVisible: true
	});
	setContext(key, ctx);

	let { children }: Props = $props();
</script>

{@render children()}
