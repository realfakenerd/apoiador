<script lang="ts">
	import { melt, type DropdownMenu } from '@melt-ui/svelte';
	import { getContext, type Snippet } from 'svelte';
	import { key } from './index';
	import { cn } from '$lib/utils';

	interface Props {
		children: Snippet;
		class?: string;
	}

	const {
		elements: { trigger }
	} = getContext<DropdownMenu>(key);

	let { children, class: className = '' }: Props = $props();
</script>

<button class={cn('transition-colors hover:text-foreground/80', className)} use:melt={$trigger}>
	{@render children()}
</button>
