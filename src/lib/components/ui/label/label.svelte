<script lang="ts">
	import { cn } from '$lib/utils';
	import { createLabel, melt } from '@melt-ui/svelte';
	import type { HTMLLabelAttributes } from 'svelte/elements';
	type $$Props = HTMLLabelAttributes;
	let className: $$Props['class'] = undefined;
	export { className as class };

	const {
		elements: { root }
	} = createLabel();
</script>

<label
	use:melt={$root}
	class={cn(
		'text-sm capitalize font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
		className
	)}
	{...$$restProps}
>
	<slot />
</label>
