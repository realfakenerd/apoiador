<script lang="ts">
	import { cn } from '$lib/utils.js';
	import type { Snippet } from 'svelte';
	import type { HeadingLevel } from './index.js';

	interface Props {
		class?: string | undefined;
		tag?: HeadingLevel;
		children: Snippet;
	}

	let { class: className, tag = 'h2', children, ...restProps }: Props = $props();
</script>

<svelte:element
	this={tag}
	class={cn('font-semibold leading-none tracking-tight', className)}
	{...restProps}
>
	{@render children()}
</svelte:element>
