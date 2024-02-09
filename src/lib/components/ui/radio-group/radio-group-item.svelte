<script lang="ts">
	import { cn } from '$lib/utils';
	import { melt, type RadioGroup } from '@melt-ui/svelte';
	import { getContext } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { type EasingFunction } from 'svelte/transition';
	import { key } from './index';
	import Label from '../label/label.svelte';

	const {
		elements: { item }
	} = getContext<RadioGroup>(key);

	type DivAttr = HTMLAttributes<HTMLDivElement>;

	interface Props {
		class?: DivAttr['class'];
		restProps?: DivAttr;
		value: string;
	}

	let { class: className, value, ...restProps } = $props<Props>();
</script>

<div class="flex items-center gap-3">
	<button
		use:melt={$item(value)}
		class={cn(
			`aspect-square h-4 w-4 rounded-full ring-1 ring-primary shadow flex items-center justify-center
			focus:outline-none hover:ring-primary/60 focus:ring-2
			disabled:cursor-not-allowed disabled:opacity-50`,
			className
		)}
		id={value}
		{...restProps}
		on:click
	>
		<div class="h-3 w-3 rounded-full bg-primary" />
		<!-- <Icon icon="mdi:check" class="h-3.5 w-3.5 fill-primary" /> -->
	</button>
	<Label
		for={value}
		id="{value}-label"
	>
		{value}
	</Label>
</div>

<style>
	button div {
		transition-property: transform;
		transition-duration: 300ms;
		transition-timing-function: cubic-bezier(0.68, -0.6, 0.32, 1.6);
	}

	button[data-state='checked'] div {
		transform: scale(1);
	}
	button[data-state='unchecked'] div {
		transform: scale(0);
	}
</style>
