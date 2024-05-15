<script lang="ts">
	import { type Variant, badgeVariants } from './index.js';
	import { cn } from '$lib/utils.js';
	import type { Snippet } from 'svelte';

	interface Props {
		class?: string | undefined;
		href?: string | undefined;
		variant?: Variant;
		children: Snippet;
	}

	let { class: className, href, variant, children, ...restProps }: Props = $props();
</script>

<svelte:element
	this={href ? 'a' : 'span'}
	{href}
	class={cn(badgeVariants({ variant, className }))}
	{...restProps}
>
	{@render children()}
</svelte:element>
