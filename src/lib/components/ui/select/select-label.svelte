<script lang="ts">
	import { Select as SelectPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils';
	import { getContext, type Snippet } from 'svelte';
	import { key } from '.';
	import { melt, type Select } from '@melt-ui/svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = HTMLAttributes<HTMLElement>;

	const {
		elements: { groupLabel }
	} = getContext<Select>(key);

	let {
		children,
		class: className,
		key: _key,
		...restProps
	} = $props<{
		class?: Props['class'];
		restProps?: Props;
		key?: string;
		children: Snippet;
	}>();
</script>

<div
	use:melt={$groupLabel(_key ?? '')}
	class={cn('px-2 py-1.5 text-sm font-semibold', className)}
	{...restProps}
>
	{@render children()}
</div>
