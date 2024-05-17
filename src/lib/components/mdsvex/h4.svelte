<script lang="ts">
	import { cn } from '$lib/utils';

	import type { Snippet } from 'svelte';
	let {
		class: className = undefined,
		children,
		...restProps
	}: { class?: string; children: Snippet } = $props();
</script>

<h4 class={cn('mt-8 scroll-m-20 text-lg font-semibold tracking-tight', className)} {...restProps}>
	{@render children()}
</h4>
