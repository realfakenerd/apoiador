<script lang="ts" generics="T">
	import { cn } from '$lib/utils';
	import Icon from '@iconify/svelte';
	import { melt, type Select } from '@melt-ui/svelte';
	import { getContext, type Snippet } from 'svelte';
	import { key } from '.';

	const {
		elements: { trigger },
		states: { open, selectedLabel }
	} = getContext<Select<T>>(key);

	let { children }: { children: Snippet } = $props();
</script>

<button
	class={cn(
		'flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1'
	)}
	use:melt={$trigger}
>
	{#if $selectedLabel}
		{$selectedLabel}
	{:else}
		{@render children()}
	{/if}
	{#if $open}
		<Icon icon="mdi:caret-up" />
	{:else}
		<Icon icon="mdi:caret-down" />
	{/if}
</button>
