<script lang="ts">
	import { cn } from '$lib/utils.js';
	import type { Snippet } from 'svelte';

	interface Props {
		class?: string | undefined;
		children: Snippet;
	}

	let { class: className, children, ...restProps }: Props = $props();
</script>

<footer class={cn('flex items-center p-6 pt-0', className)} {...restProps}>
	{@render children()}
</footer>
