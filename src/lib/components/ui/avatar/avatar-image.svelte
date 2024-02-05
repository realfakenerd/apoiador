<script lang="ts">
	import { cn } from '$lib/utils';
	import { Avatar as AvatarPrimitive } from 'bits-ui';

	type ImageProps = AvatarPrimitive.ImageProps;

	let {
		class: className = undefined,
		src,
		alt,
		restProps
	} = $props<{
		class?: ImageProps['class'];
		src?: ImageProps['src'];
		alt?: ImageProps['alt'];
		restProps: ImageProps;
	}>();
</script>

<AvatarPrimitive.Image
	{src}
	{alt}
	class={cn('aspect-square h-full w-full', className)}
	{...restProps}
/>
