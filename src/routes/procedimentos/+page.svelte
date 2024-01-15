<script lang="ts">
	import * as Section from '$lib/components/section';
	import { Badge } from '$lib/components/ui/badge';
	import * as Card from '$lib/components/ui/card';
	import * as ToggleGroup from '$lib/components/ui/toggle-group';
	import type { PageServerData } from './$types';

	export let data: PageServerData;

	const categories = Array.from(
		new Set(data.procedimentos.flatMap((procedimento) => procedimento.category))
	);
	let selectedFilters = 'todos';
	$: filteredProcedimentos = data.procedimentos;

	function changeFilter(val?: string | string[]) {
		if (val === 'todos') {
			filteredProcedimentos = data.procedimentos;
			return;
		}
		filteredProcedimentos = data.procedimentos;
		filteredProcedimentos = filteredProcedimentos.filter(({ category }) =>
			category.includes(val as string)
		);
	}
</script>

<Section.Root>
	<Section.Heading>Procedimentos</Section.Heading>
	<ToggleGroup.Root value={selectedFilters} class="self-start flex-wrap" onValueChange={changeFilter}>
		<ToggleGroup.Item class="capitalize" value="todos">Todos</ToggleGroup.Item>
		{#each categories as cat}
			<ToggleGroup.Item class="capitalize" value={cat}>{cat}</ToggleGroup.Item>
		{/each}
	</ToggleGroup.Root>
	<hr />
	<ul class="grid w-full gap-2">
		{#each filteredProcedimentos as procedimento, i (i)}
			{@const published = new Date(procedimento.published)}
			{@const updated = new Date(procedimento.updated)}
			<Card.Root>
				<Card.Header>
					<a
						class="inline-flex items-center justify-between"
						href="/procedimentos/{procedimento.slug}"
					>
						<Card.Title class="hover:underline">{procedimento.title}</Card.Title>
						{#if updated > published}
							<Badge>atualizado</Badge>
						{/if}
					</a>
					<Card.Description>
						<ul class="inline-flex flex-wrap gap-2 text-label-large">
							{#each procedimento.category as cat}
								<li class="text-tertiary">
									#{cat}
								</li>
							{/each}
						</ul>
					</Card.Description>
				</Card.Header>
				<Card.Content>
					<p>{procedimento.description}</p>
				</Card.Content>
			</Card.Root>
		{:else}
			não achamos o que queria...
		{/each}
	</ul>
</Section.Root>

<style>
	ul.grid {
		grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
	}
</style>
