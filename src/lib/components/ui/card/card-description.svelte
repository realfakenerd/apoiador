<script lang="ts">
	import { cn } from '$lib/utils.js';
	import type { Snippet } from 'svelte';
	
	interface Props {
		class?: string | undefined;
		children: Snippet;
	}

	let { class: className, children, ...restProps }: Props = $props();
</script>

<p class={cn('text-sm text-muted-foreground', className)} {...restProps}>
	{@render children()}
</p>
