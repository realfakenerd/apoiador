<script lang="ts">
	import { cn } from '$lib/utils';
	import DocsSidebarNavItems from './SidebarNavItem.svelte';

	let { items = [] }: { items: SidebarNavItem[] } = $props();
</script>

{#if items.length}
	<div class="w-full" style="view-timeline-name: sidebarnav;">
		{#each items as item, index (index)}
			<div class={cn('pb-4')}>
				<h4 class="mb-1 rounded-md px-2 py-1 text-sm font-semibold">
					{item.title}
				</h4>
				{#if item?.items}
					{#if item?.items?.length}
						<DocsSidebarNavItems items={item.items} />
					{/if}
				{/if}
			</div>
		{/each}
	</div>
{/if}
