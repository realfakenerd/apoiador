<script lang="ts">
	import { page } from '$app/stores';
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	interface Props {
		class?: string;
		href?: string;
		open?: boolean;
		restProps?: HTMLAnchorAttributes;
		children: Snippet;
	}

	let { class: className, href, open = $bindable(), children, restProps }: Props = $props();
</script>

<a
	{href}
	onclick={() => (open = false)}
	class={cn(
		$page.url.pathname === href ? 'text-foreground' : 'text-foreground/60',
		'text-sm',
		className
	)}
	{...restProps}
>
	{@render children()}
</a>
