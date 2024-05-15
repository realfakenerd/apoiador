<script lang="ts">
	import { cn } from '$lib/utils.js';
	import type { MouseEventHandler } from 'svelte/elements';
	import { buttonVariants, type Size, type Variant } from './index.js';

	import type { Snippet } from 'svelte';

	interface Props {
		class?: string | undefined;
		children: Snippet;
		variant?: Variant;
		size?: Size;
		onclick?: MouseEventHandler<HTMLButtonElement>;
	}

	let {
		class: className,
		variant = 'default',
		size = 'default',
		onclick,
		children,
		...restProps
	}: Props = $props();
</script>

<button
	class={cn(buttonVariants({ variant, size, className }))}
	type="button"
	{...restProps}
	{onclick}
>
	{@render children()}
</button>
