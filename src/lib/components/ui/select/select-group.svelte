<script lang="ts">
	import { getContext, type Snippet } from 'svelte';
	import { key } from './index';
	import { type Select, melt } from '@melt-ui/svelte';

	const {
		elements: { group }
	} = getContext<Select>(key);

	console.log($group);

	let { key: _key, children } = $props<{
		key?: string;
		children: Snippet;
	}>();
</script>

<div use:melt={$group(_key ?? '')}>
	{@render children()}
</div>
