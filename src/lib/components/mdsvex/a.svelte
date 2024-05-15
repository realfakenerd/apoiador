<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	let {
		class: className = undefined,
		href,
		children,
		...restProps
	}: { class?: string; href: string; children: Snippet } = $props();

	let internal = $derived(href.startsWith('/') || href.startsWith('#'));
	let rel = $derived(!internal ? 'noopener noreferrer' : undefined);
	let target = $derived(!internal ? '_blank' : undefined);
</script>

<a
	{href}
	{target}
	{rel}
	class={cn('font-medium decoration-wavy underline decoration-primary', className)}
	{...restProps}
>
	{@render children()}
</a>
