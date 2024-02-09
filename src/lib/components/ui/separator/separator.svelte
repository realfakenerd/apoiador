<script lang="ts">
	import { cn } from '$lib/utils';
	import { createSeparator, melt, type CreateSeparatorProps } from '@melt-ui/svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = CreateSeparatorProps & HTMLAttributes<HTMLHRElement>;

	let {
		orientation: _orientation = 'horizontal',
		decorative: _decorative = false,
		class: className,
		...restProps
	} = $props<{
		orientation?: Props['orientation'];
		decorative?: Props['decorative'];
		class?: Props['class'];
	}>();

	const {
		elements: { root },
		options: { orientation }
	} = createSeparator({
		decorative: _decorative,
		orientation: _orientation
	});
</script>

<div
	use:melt={$root}
	class={cn(
		'bg-border',
		$orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
		className
	)}
	{...restProps}
/>
