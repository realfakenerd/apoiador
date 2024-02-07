<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = HTMLAttributes<HTMLElement>;

	interface CardProp {
		href?: string;
		isRoute?: boolean;
		restProps?: Props;
		children: Snippet;
		class?: Props['class'];
		tag?: 'div' | 'section' | 'a';
	}

	let {
		href = '',
		tag = href ? 'a' : 'section',
		isRoute = true,
		class: className,
		children,
		...restProps
	} = $props<CardProp>();

	const a = {
		href,
		rel: 'noreferer',
		target: isRoute ? '_self' : '_blank'
	};
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<svelte:element
	this={tag}
	{...a}
	class={cn('rounded-xl border bg-card text-card-foreground shadow', className)}
	{...restProps}
	on:click
	on:focusin
	on:focusout
	on:mouseenter
	on:mouseleave
>
	{@render children()}
</svelte:element>
