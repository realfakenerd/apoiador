<script lang="ts">
	import { cn } from '$lib/utils';

	import type { Snippet } from 'svelte';
	let {
		class: className = undefined,
		children,
		...restProps
	}: { class?: string; children: Snippet } = $props();
</script>

<p class={cn('leading-7 [&:not(:first-child)]:mt-6', className)} {...restProps}>
	{@render children()}
</p>
