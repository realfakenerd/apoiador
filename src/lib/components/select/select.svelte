<script lang="ts">
	import { createSelect } from '@melt-ui/svelte';
	import { setContext, type Snippet } from 'svelte';
	import { key } from '.';

	const ctx = createSelect({
		forceVisible: true,
		positioning: {
			fitViewport: true,
			sameWidth: true
		},
		defaultSelected: { value: 'Rua' }
	});
	setContext(key, ctx);
	let { children, value = $bindable('') }: { children: Snippet; value: any } = $props();
</script>

<section>
	{@render children()}
</section>

<style>
	section:has(label) {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
