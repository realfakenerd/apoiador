<script lang="ts">
	import { cn } from '$lib/utils';
	import { melt, type Select } from '@melt-ui/svelte';
	import { getContext, type Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { slide } from 'svelte/transition';
	import { key } from '.';

	type Props = HTMLAttributes<HTMLDivElement>;

	const {
		elements: { menu },
		states: { open }
	} = getContext<Select>(key);

	let {
		class: className,
		children,
		...restProps
	} = $props<{
		class?: Props['class'];
		restProps?: Props;
		children: Snippet;
	}>();
</script>

{#if $open}
	<div
		use:melt={$menu}
		transition:slide={{ axis: 'y' }}
		class={cn(
			'relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md focus:outline-none',
			className
		)}
		{...restProps}
	>
		<div class="w-full p-1">
			{@render children()}
		</div>
	</div>
{/if}
