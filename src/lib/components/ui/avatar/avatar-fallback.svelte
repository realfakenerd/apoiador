<script lang="ts">
	import { cn } from '$lib/utils';
	import { Avatar as AvatarPrimitive } from 'bits-ui';
	import type { Snippet } from 'svelte';

	type FallbackProps = AvatarPrimitive.FallbackProps;

	let { class: className = undefined, children,restProps } = $props<{
		class?: FallbackProps['class'];
		children: Snippet;
		restProps: FallbackProps;
	}>();
</script>

<AvatarPrimitive.Fallback
	class={cn('flex h-full w-full items-center justify-center rounded-full bg-muted', className)}
	{...restProps}
>
	{@render children()}
</AvatarPrimitive.Fallback>
