<script lang="ts">
	import { cn } from '$lib/utils';
	import Icon from '@iconify/svelte';
	import { melt, type Select } from '@melt-ui/svelte';
	import { getContext, type Snippet } from 'svelte';
	import { key } from './index';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	type Props = HTMLButtonAttributes;

	const {
		elements: { trigger }
	} = getContext<Select>(key);

	let {
		children,
		class: className,
		...restProps
	} = $props<{
		restProps?: Props;
		class?: string;
		children: Snippet;
	}>();
</script>

<button
	use:melt={$trigger}
	class={cn(
		'flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
		className
	)}
	{...restProps}
>
	{@render children()}
	<div>
		<Icon class="h-4 w-4 opacity-50" icon="mdi:arrow-expand-vertical" />
	</div>
</button>
