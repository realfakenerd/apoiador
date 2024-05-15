<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';
	let {
		class: className = undefined,
		children,
		...restProps
	}: { class?: string; children: Snippet } = $props();
</script>

<h2
	class={cn(
		'mt-12 scroll-m-20 border-b border-primary pb-2 text-2xl font-semibold tracking-tight first:mt-0',
		className
	)}
	{...restProps}
>
	{@render children()}
</h2>
