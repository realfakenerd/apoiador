<script lang="ts" generics="T">
	import { cn } from '$lib/utils';
	import { melt, type Select } from '@melt-ui/svelte';
	import { getContext } from 'svelte';
	import { key } from '.';

	const {
		elements: { option }
	} = getContext<Select<T>>(key);

	let { value, label }: { value: string, label: string } = $props();
</script>

<div
	use:melt={$option({ value, label })}
	class={cn(
		'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[disabled]:opacity-50'
	)}
>
		{label}
</div>
