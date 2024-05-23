<script lang="ts" generics="T">
	import { easeEmphasizedAccel, easeEmphasizedDecel } from '../nav/transition';
	import { slide } from 'svelte/transition';
	import { cn } from '$lib/utils';
	import { melt, type Select } from '@melt-ui/svelte';
	import { getContext, type Snippet } from 'svelte';
	import { key } from '.';

	const {
		elements: { menu },
		states: { open }
	} = getContext<Select<T>>(key);

	let { children }: { children: Snippet } = $props();
</script>

{#if $open}
	<div
		in:slide={{ axis: 'y', duration: 400, easing: easeEmphasizedDecel }}
		out:slide={{ axis: 'y', duration: 250, easing: easeEmphasizedAccel }}
		class={cn(
			'relative z-50 min-w-[8rem] overflow-y-auto rounded-md border bg-popover text-popover-foreground shadow-md focus:outline-none'
		)}
		use:melt={$menu}
	>
		{@render children()}
	</div>
{/if}
