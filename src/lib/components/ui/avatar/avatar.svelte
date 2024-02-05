<script lang="ts">
	import { cn } from '$lib/utils';
	import { Avatar as AvatarPrimitive } from 'bits-ui';
	import type { Snippet } from 'svelte';

	type Props = AvatarPrimitive.Props;

	let {
		class: className,
		delayMs,
		children,
		restProps
	} = $props<{
		class: Props['class'];
		delayMs: Props['delayMs'];
		children: Snippet;
		restProps: Props;
	}>();
</script>

<AvatarPrimitive.Root
	{delayMs}
	class={cn('relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full', className)}
	{...restProps}
>
	{@render children()}
</AvatarPrimitive.Root>
