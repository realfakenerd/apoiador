<script lang="ts">
	import { cn } from '$lib/utils';
	import { melt, type DropdownMenu } from '@melt-ui/svelte';
	import { getContext } from 'svelte';
	import { key } from '.';

	let className: string | undefined = undefined;
	export { className as class };

	const {
		elements: { separator }
	} = getContext<DropdownMenu>(key);
</script>

<div use:melt={$separator} class={cn('-mx-1 my-1 h-px bg-muted', className)} {...$$restProps} />
