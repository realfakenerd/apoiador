<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import {
		Card,
		CardContent,
		CardHeader,
		CardTitle
	} from '$lib/components/ui/card';
	import { Separator } from '$lib/components/ui/separator';
	import { cn } from '$lib/utils.js';
	import { diffDays } from '@formkit/tempo';
	import { createToggleGroup, melt } from '@melt-ui/svelte';
	import { Set } from 'svelte/reactivity';

	let { data } = $props();
	const { procedimentos } = data;

	const categories = Array.from(
		new Set(
			procedimentos.flatMap((procedimento) => {
				procedimento.category.push('todos');
				return procedimento.category;
			})
		)
	);

	let filteredProcedimentos = $state(procedimentos);

	function changeFilter({ curr, next }: { curr: string; next: string }) {
		if ((next || curr) === 'todos') {
			filteredProcedimentos = procedimentos;
			return 'todos';
		}

		filteredProcedimentos = procedimentos;
		filteredProcedimentos = filteredProcedimentos.filter(({ category }) => category.includes(next));
		return next;
	}

	const {
		elements: { item, root },
		helpers: { isPressed }
	} = createToggleGroup({
		type: 'single',
		defaultValue: 'todos',
		onValueChange: changeFilter as any
	});

</script>

<section class="p-10 pb-16 flex flex-col gap-6">
	<header class="flex flex-col gap-0.5">
		<h2 class="text-2xl">Procedimentos</h2>
		<p class="text-muted-foreground">Manual de procedimentos da APSA</p>
	</header>

	<section
		use:melt={$root}
		class="flex items-center justify-center gap-1 self-start flex-wrap border rounded-xl p-1"
	>
		{#each categories.sort().reverse() as cat (cat)}
			<button
				class={cn(
					'capitalize relative h-9 px-3 rounded-md bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground',
					$isPressed(cat) && 'bg-accent text-accent-foreground'
				)}
				use:melt={$item(cat)}
			>
				<span class="relative">{cat}</span>
			</button>
		{/each}
	</section>

	<Separator />
	<ul class="grid w-full gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
		{#each filteredProcedimentos as procedimento, i (i)}
			{@const published = new Date(procedimento.published)}
			{@const updated = new Date(procedimento.updated)}
			<Card>
				<a href="/procedimentos/{procedimento.slug}">
					<CardHeader class="inline-flex items-center justify-between">
						<CardTitle class="hover:underline">
							{procedimento.title}
						</CardTitle>
						{#if diffDays(updated, published) > 30}
							<Badge>atualizado</Badge>
						{/if}
					</CardHeader>
				</a>
				<CardContent>
					<p>{procedimento.description}</p>
				</CardContent>
			</Card>
		{:else}
			não achamos o que queria...
		{/each}
	</ul>
</section>
