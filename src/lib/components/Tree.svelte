<script lang="ts">
	import { page } from '$app/stores';
	import { cn } from '$lib/utils';
	import { melt, type TableOfContentsElements, type TableOfContentsItem } from '@melt-ui/svelte';

	interface Props {
		level?: number;
		activeHeadingIdxs?: number[];
		tree?: TableOfContentsItem[];
		item: TableOfContentsElements['item'];
	}

	let { level = 1, tree = [], activeHeadingIdxs, item }: Props = $props();
</script>

<ul class={cn('m-0 list-none', { 'pl-4': level !== 1 })}>
	{#if tree && tree.length}
		{#each tree as heading, i (i)}
			<li class={cn('mt-0 pt-2')}>
				<a
					href="#{heading.id}"
					use:melt={$item(heading.id)}
					class={cn(
						'inline-block no-underline transition-colors hover:text-foreground data-[active]:text-foreground',
						heading.id === $page.url.hash ? 'font-medium text-foreground' : 'text-muted-foreground'
					)}
				>
					{@html heading.node.innerHTML}
				</a>
				{#if heading.children && heading.children.length}
					<svelte:self tree={heading.children} {item} {activeHeadingIdxs} level={level + 1} />
				{/if}
			</li>
		{/each}
	{/if}
</ul>
