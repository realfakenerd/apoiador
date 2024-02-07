<script lang="ts">
	// import Balancer from "svelte-wrap-balancer";
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	let {
		class: className = undefined,
		restProps,
		children
	} = $props<{ class?: string; restProps?: any[]; children: Snippet }>();
</script>

<h2 class={cn('max-w-[750px] text-lg text-muted-foreground sm:text-xl', className)} {...restProps}>
	{@render children()}
</h2>
