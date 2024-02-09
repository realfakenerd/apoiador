<script lang="ts">
	import { getContext, type Snippet } from 'svelte';
	import { key } from '.';
	import { melt, type DropdownMenu } from '@melt-ui/svelte';
	import { cn } from '$lib/utils';

	const {
		elements: { trigger }
	} = getContext<DropdownMenu>(key);

	let { children, class: className } = $props<{
		children: Snippet;
		class?: string
	}>();


</script>

<button class={cn(className)} use:melt={$trigger}>
	{@render children()}
</button>
