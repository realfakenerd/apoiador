<script lang="ts">
	import { cn } from '$lib/utils';

	import type { Snippet } from 'svelte';
	let {
		class: className = undefined,
		children,
		...restProps
	}: { class?: string; children: Snippet } = $props();
</script>

<ol class={cn('my-6 ml-6 list-decimal', className)} {...restProps}>
	{@render children()}
</ol>
