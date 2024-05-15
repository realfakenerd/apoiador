<script lang="ts">
	import { melt, type DropdownMenu } from '@melt-ui/svelte';
	import { getContext, type Snippet } from 'svelte';
	import { key } from './index';
	import { cn } from '$lib/utils';
	import type { MouseEventHandler } from 'svelte/elements';

	interface Props {
		class?: string;
		href?: string;
		onclick?: MouseEventHandler<HTMLAnchorElement>;
		children: Snippet;
	}

	const {
		elements: { item }
	} = getContext<DropdownMenu>(key);

	let { class: className, href = '', onclick, children }: Props = $props();
</script>

<a
	{onclick}
	{href}
	class={cn(
		'relative flex cursor-default transition-colors items-center px-3 py-2 text-sm',
		'focus:bg-accent/50 focus:text-accent-foreground',
		'hover:bg-accent/50 hover:text-accent-foreground',
		className
	)}
	use:melt={$item}
>
	{@render children()}
</a>
