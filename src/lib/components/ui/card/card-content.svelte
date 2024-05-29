<script lang="ts">
	import { cn } from '$lib/utils.js';
	import type { Snippet } from 'svelte';

	interface Props {
		id?: string;
		class?: string;
		children?: Snippet;
	}

	let { class: className = '', id = '', children, ...restProps }: Props = $props();
</script>

<main {id} class={cn('p-6 pt-0', className)} {...restProps}>
	{@render children?.()}
</main>
