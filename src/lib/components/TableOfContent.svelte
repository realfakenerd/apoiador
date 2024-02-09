<script lang="ts">
	import { createTableOfContents } from '@melt-ui/svelte';
	import Tree from './Tree.svelte';

	const {
		elements: { item },
		states: { headingsTree, activeHeadingIdxs }
	} = createTableOfContents({
		selector: '#mdsvex',
		activeType: 'all',
		scrollOffset: 90,
		headingFilterFn: (heading) => !heading.hasAttribute('data-toc-ignore')
	});
</script>

<nav class="space-y-2">
	<p class="font-medium">Nesta pagina</p>
	{#key $headingsTree}
		<Tree tree={$headingsTree} activeHeadingIdxs={$activeHeadingIdxs} {item} />
	{/key}
</nav>
