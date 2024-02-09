<script lang="ts">
	import { cn } from '$lib/utils';
	import { melt, type DropdownMenu } from '@melt-ui/svelte';
	import { getContext, type Snippet } from 'svelte';
	import { key } from '.';
	import type { FloatingConfig } from '@melt-ui/svelte/internal/actions';

	let {
		class: className,
		align,
		children
	} = $props<{
		class?: string;
		align?: FloatingConfig;
		children: Snippet;
	}>();

	const {
		elements: { menu },
		states: { open },
		options: { positioning }
	} = getContext<DropdownMenu>(key);

	positioning.set(align ?? { placement: 'bottom' });
</script>

{#if $open}
	<div
		use:melt={$menu}
		class={cn(
			'z-50 min-w-[8rem] rounded-md border bg-popover p-1 text-popover-foreground shadow-md focus:outline-none',
			className
		)}
	>
		{@render children()}
	</div>
{/if}
