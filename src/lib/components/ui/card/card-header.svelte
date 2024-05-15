<script lang="ts">
	import { cn } from '$lib/utils.js';
	import type { Snippet } from 'svelte';

	interface Props {
		class?: string | undefined;
		children: Snippet;
	}

	let { class: className, children, ...restProps }: Props = $props();
</script>

<header class={cn('flex flex-col gap-y-1.5 p-6', className)} {...restProps}>
	{@render children()}
</header>
