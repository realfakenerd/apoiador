<script lang="ts">
	import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils';
	import { getContext, type Snippet } from 'svelte';
	import { key } from '.';
	import { melt, type DropdownMenu } from '@melt-ui/svelte';
	import type { MouseEventHandler } from 'svelte/elements';
	import type { MeltEventHandler } from '@melt-ui/svelte/internal/types';

	const {
		elements: { item }
	} = getContext<DropdownMenu>(key);

	let {
		class: className,
		children,
		onclick
	} = $props<{
		children: Snippet;
		class?: string;
		onclick?: MeltEventHandler<MouseEvent>;
	}>();
</script>

<div
	use:melt={$item}
	class={cn(
		'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
		className
	)}
	on:m-click={onclick}
>
	{@render children()}
</div>
