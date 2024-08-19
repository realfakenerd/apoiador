<script lang="ts">
	import { cn } from '$lib/utils.js';
	import type { Snippet } from 'svelte';

	interface Props {
		class?: string;
		children: Snippet;
	}

	let { class: className, children, ...restProps }: Props = $props();
</script>

<section
	class={cn('rounded-xl border bg-background text-foreground shadow', className)}
	{...restProps}
>
	{@render children()}
</section>
