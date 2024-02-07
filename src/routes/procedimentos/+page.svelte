<script lang="ts">
	import { Section, SectionHeading, SectionTitle } from '$lib/components/section';
	import { Badge } from '$lib/components/ui/badge';
	import {
		Card,
		CardContent,
		CardDescription,
		CardHeader,
		CardTitle
	} from '$lib/components/ui/card';
	import { ToggleGroup, ToggleGroupItem } from '$lib/components/ui/toggle-group';

	let { data } = $props();
	const { procedimentos } = data;

	const categories = Array.from(
		new Set(procedimentos.flatMap((procedimento) => procedimento.category))
	);
	let selectedFilters = 'todos';
	let filteredProcedimentos = $state(procedimentos);

	function changeFilter(val?: string | string[]) {
		if (val === 'todos') {
			filteredProcedimentos = procedimentos;
			return;
		}
		filteredProcedimentos = procedimentos;
		filteredProcedimentos = filteredProcedimentos.filter(({ category }) =>
			category.includes(val as string)
		);
	}
</script>

<Section>
	<SectionHeading>
		<SectionTitle>Procedimentos</SectionTitle>
	</SectionHeading>
	<ToggleGroup
		value={selectedFilters}
		class="self-start flex-wrap border rounded-lg p-1"
		onValueChange={changeFilter}
	>
		<ToggleGroupItem  class="capitalize" value="todos">Todos</ToggleGroupItem>
		{#each categories as cat}
			<ToggleGroupItem class="capitalize" value={cat}>{cat}</ToggleGroupItem>
		{/each}
	</ToggleGroup>
	<hr />
	<ul class="grid w-full gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
		{#each filteredProcedimentos as procedimento, i (i)}
			{@const published = new Date(procedimento.published)}
			{@const updated = new Date(procedimento.updated)}
			<Card>
				<CardHeader>
					<a
						class="inline-flex items-center justify-between"
						href="/procedimentos/{procedimento.slug}"
					>
						<CardTitle class="hover:underline">{procedimento.title}</CardTitle>
						{#if updated > published}
							<Badge>atualizado</Badge>
						{/if}
					</a>
					<CardDescription>
						<ul class="inline-flex flex-wrap gap-2 text-label-large">
							{#each procedimento.category as cat}
								<li class="text-tertiary">
									#{cat}
								</li>
							{/each}
						</ul>
					</CardDescription>
				</CardHeader>
				<CardContent>
					<p>{procedimento.description}</p>
				</CardContent>
			</Card>
		{:else}
			não achamos o que queria...
		{/each}
	</ul>
</Section>
