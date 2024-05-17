<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	let {
		class: className = undefined,
		children,
		...restProps
	}: { class?: string; children: Snippet } = $props();
</script>

<blockquote
	class={cn('mt-6 border-l-2 border-primary bg-muted/20 pl-6 pr-4 py-1 italic', className)}
	{...restProps}
>
	{@render children()}
</blockquote>
