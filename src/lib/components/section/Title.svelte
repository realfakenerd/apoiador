<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HeadingLevel } from '../ui/card';
	import { cn } from '$lib/utils';

	let {
		children,
		tag = 'h1',
		class: className = undefined
	} = $props<{ children: Snippet; tag?: HeadingLevel; class?: string }>();
</script>

<svelte:element
	this={tag}
	class={cn(
		'text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]',
		className
	)}
>
	{@render children()}
</svelte:element>
