<script lang="ts">
	import { cn } from '$lib/utils';
	
	import type { Snippet } from 'svelte';
	let {
		class: className = undefined,
		children,
		...restProps
	}: { class?: string; children: Snippet } = $props();
</script>

<li class={cn('mt-2', className)} {...restProps}>
	{@render children()}
</li>
