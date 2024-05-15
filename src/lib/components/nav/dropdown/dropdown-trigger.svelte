<script lang="ts">
	import { melt, type DropdownMenu } from '@melt-ui/svelte';
	import { getContext, type Snippet } from 'svelte';
	import { key } from './index';

	interface Props {
		children: Snippet;
	}

	const {
		elements: { trigger }
	} = getContext<DropdownMenu>(key);

	let { children }: Props = $props();
</script>

<button class="transition-colors hover:text-foreground/80" use:melt={$trigger}>
	{@render children()}
</button>
