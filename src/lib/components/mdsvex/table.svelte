<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';
	let {
		class: className = undefined,
		children,
		...restProps
	}: { class?: string; children: Snippet } = $props();
</script>

<div class="my-6 w-full overflow-y-auto">
	<table class={cn('w-full', className)} {...restProps}>
		{@render children()}
	</table>
</div>
