<script lang="ts">
	import { createLabel, melt } from '@melt-ui/svelte';
	import type { Snippet } from 'svelte';

	const {
		elements: { root }
	} = createLabel();

	let { for: phor, children }: { for: string; children: Snippet } = $props();
</script>

<label
	use:melt={$root}
	class="capitalize text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
	for={phor}
>
	{@render children()}
</label>
