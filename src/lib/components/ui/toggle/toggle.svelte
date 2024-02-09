<script lang="ts">
	import { cn } from "$lib/utils";
	import { createToggle, melt } from '@melt-ui/svelte';
	import { toggleVariants, type Size, type Variant } from ".";

	type $$Props = TogglePrimitive.Props & {
		variant?: Variant;
		size?: Size;
	};
	type $$Events = TogglePrimitive.Events;

	let className: $$Props["class"] = undefined;
	export let variant: $$Props["variant"] = "default";
	export let size: $$Props["size"] = "default";
	export { className as class };

	const {
    elements: { root },
	states: {pressed}
  } = createToggle();
</script>

<button
	use:melt={$root}
	class={cn(toggleVariants({ variant, size, className }))}
	{...$$restProps}
	on:click
	on:keydown
>
	<slot />
</button>
