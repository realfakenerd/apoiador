<script lang="ts">
	import { page } from '$app/stores';
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	interface Props {
		class?: string;
		href?: string;
		open?: boolean;
		children: Snippet;
		restProps?: HTMLAnchorAttributes;
	}

	let { class: className, href, open, children, restProps }: Props = $props();
</script>

<a
	{href}
	onclick={() => (open = false)}
	class={cn($page.url.pathname === href ? 'text-foreground' : 'text-foreground/60', className)}
	{...restProps}
>
	{@render children()}
</a>
