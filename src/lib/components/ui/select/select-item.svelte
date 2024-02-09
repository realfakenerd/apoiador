<script lang="ts">
	import { cn } from '$lib/utils';
	import { melt, type Select } from '@melt-ui/svelte';
	import { getContext } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { key } from '.';
	import Icon from '@iconify/svelte';

	type Props = HTMLAttributes<HTMLDivElement>;
	const {
		elements: { option },
		helpers: { isSelected }
	} = getContext<Select>(key);

	let {
		item = '',
		label = String(item),
		class: className,
		...restProps
	} = $props<{
		item: string | number;
		label?: string;
		class?: Props['class'];
		restProps?: Props;
	}>();
</script>

<div
	use:melt={$option({ value: item, label })}
	class={cn(
		'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
		className
	)}
	{...restProps}
>
	<span
		class="absolute right-2 flex h-3.5 w-3.5 items-center justify-center {$isSelected(item)
			? 'block'
			: 'hidden'}"
	>
		<Icon icon="mdi:check" />
	</span>
	{label}
</div>
