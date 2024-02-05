<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	let { class: className = undefined, restProps, children } = $props<{ class?: string; restProps: any[], children: Snippet }>();

</script>

<h1
	class={cn(
		'text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]',
		className
	)}
	{...restProps}
>
	{@render children()}
</h1>
