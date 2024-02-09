<script lang="ts">
	import { cn } from '$lib/utils';
	import { createRadioGroup, melt } from '@melt-ui/svelte';
	import { setContext, type Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { key } from './index';

	type DivAttr = HTMLAttributes<HTMLDivElement>;

	interface Props {
		class?: DivAttr['class'];
		restProps?: DivAttr;
		children: Snippet;
		defaultValue?: string;
	}

	let { class: className, children, defaultValue, ...restProps } = $props<Props>();

	const ctx = createRadioGroup({
		defaultValue
	});

	setContext(key, ctx);

	const {
		elements: { root }
	} = ctx;
</script>

<div use:melt={$root} class={cn('grid gap-2', className)} {...restProps.restProps}>
	{@render children()}
</div>
