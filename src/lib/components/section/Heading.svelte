<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	let {
		class: className = undefined,
		restProps,
		children
	} = $props<{ class?: string; restProps?: any[]; children: Snippet }>();
</script>

<header class={cn('flex flex-row', className)} {...restProps}>
	{@render children()}
</header>
