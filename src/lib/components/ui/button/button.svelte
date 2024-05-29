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
		type?: "button" | "submit" | "reset" | null | undefined;
		onclick?: MouseEventHandler<HTMLButtonElement>;
	}

	let {
		class: className,
		variant = 'default',
		size = 'default',
		type = 'button',
		onclick,
		children,
		...restProps
	}: Props = $props();
</script>

<button
	class={cn(buttonVariants({ variant, size, className }))}
	{type}
	{...restProps}
	{onclick}
>
	{@render children()}
</button>
