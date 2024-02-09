<script lang="ts">
	import { page } from '$app/stores';
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	let {
		class: className,
		href,
		open,
		children,
		restProps
	} = $props<{
		class?: string;
		href?: string;
		open?: boolean;
		children: Snippet;
		restProps?: HTMLAnchorAttributes;
	}>();
</script>

<a
	{href}
	on:click={() => (open = false)}
	class={cn($page.url.pathname === href ? 'text-foreground' : 'text-foreground/60', className)}
	{...restProps}
>
	{@render children()}
</a>
