<script lang="ts">
	import Tree from './Tree.svelte';

	let filteredHeadingsList = $state<TableOfContents>();

	function getHeadingsWithHierarchy(divId: string) {
		const div = document.getElementById(divId);

		if (!div) return { items: [] };

		const headings: HTMLHeadingElement[] = Array.from(div.querySelectorAll('h2, h3'));
		const hierarchy: TableOfContents = { items: [] };
		let currentLevel: TableOfContentsItem | undefined = undefined;

		const newIdSet: Set<string> = new Set();
		let count = 1;
		headings.forEach((heading: HTMLHeadingElement) => {
			const level = parseInt(heading.tagName.charAt(1));
			if (!heading.id) {
				let newId = heading.innerText
					.replaceAll(/[^a-zA-Z0-9 ]/g, '')
					.replaceAll(' ', '-')
					.toLowerCase();
				if (newIdSet.has(newId)) {
					newId = `${newId}-${count}`;
					count++;
				}
				newIdSet.add(newId);
				heading.id = `${newId}`;
			}

			const item: TableOfContentsItem = {
				title: heading.textContent || '',
				url: `#${heading.id}`,
				items: []
			};

			if (level === 2) {
				hierarchy.items.push(item);
				currentLevel = item;
			} else if (level === 3 && currentLevel?.items) {
				currentLevel.items.push(item);
			}
		});

		filteredHeadingsList = hierarchy;
	}

	// Lifecycle
	$effect(() => {
		getHeadingsWithHierarchy('mdsvex');
	});
</script>

<div class="space-y-2">
	<p class="font-medium">Nesta pagina</p>
	<Tree tree={filteredHeadingsList} />
</div>
