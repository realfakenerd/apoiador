<script lang="ts">
	import { cn } from '$lib/utils';

	import type { Snippet } from 'svelte';
	let {
		class: className = undefined,
		children,
		...restProps
	}: { class?: string; children: Snippet } = $props();
</script>

<tr class={cn('m-0 border-t p-0 even:bg-muted', className)} {...restProps}>
	{@render children()}
</tr>
