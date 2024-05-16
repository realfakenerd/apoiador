<script lang="ts">
	import { melt, type DropdownMenu } from '@melt-ui/svelte';
	import { getContext, type Snippet } from 'svelte';
	import { key } from './index';
	import {cubicInOut} from 'svelte/easing'
	import { fly, slide } from 'svelte/transition';
	import { cn } from '$lib/utils';
	import { easeEmphasized } from '../transition';

	interface Props {
		class?: string;
		children: Snippet;
	}

	const {
		elements: { menu },
		states: { open }
	} = getContext<DropdownMenu>(key);

	let { class: className = '', children }: Props = $props();
</script>

{#if $open}
	<div
		transition:slide={{ duration: 250, easing: easeEmphasized, axis: 'y' }}
		class={cn(
			'flex flex-col gap-1',
			'transition-shadow shadow-lg shadow-background/30 z-50 min-w-[8rem] rounded-md bg-popover overflow-hidden text-popover-foreground',
			'hover:ring-2 ring-primary',
			className
		)}
		use:melt={$menu}
	>
		{@render children()}
	</div>
{/if}
