<script lang="ts">
	import { cn } from '$lib/utils';
	import { melt, type DropdownMenu } from '@melt-ui/svelte';
	import { getContext, type Snippet } from 'svelte';
	import { slide } from 'svelte/transition';
	import { easeEmphasized } from '../transition';
	import { key } from './index';

	interface Props {
		class?: string;
		axis?: 'y' | 'x';
		children: Snippet;
	}

	const {
		elements: { menu },
		states: { open }
	} = getContext<DropdownMenu>(key);

	let { class: className = '', axis = 'y', children }: Props = $props();
</script>

{#if $open}
	<div
		transition:slide={{ duration: 250, easing: easeEmphasized, axis }}
		class={cn(
			className,
			'flex flex-col gap-1',
			'transition-shadow shadow-lg shadow-background/30 z-50 min-w-[8rem] rounded-md bg-popover overflow-hidden text-popover-foreground',
			'hover:ring-2 ring-primary'
		)}
		use:melt={$menu}
	>
		{@render children()}
	</div>
{/if}
