<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import {Textfield} from '$lib/components/textfield';
	import type { PageServerData } from './$types';
	export let data: PageServerData;

	const { procedimentos } = data;

	console.log(procedimentos);
</script>

<h1 class="text-headline-large">Procedimentos</h1>

<ul class="grid gap-2">
	{#each procedimentos as procedimento}
		<Card elevated>
			<a href={`/procedimentos/${procedimento.slug}`}>
				<h1 class="text-title-large">{procedimento.title}</h1>
			</a>
			<ul class="inline-flex gap-2 text-label-large">
				{#each procedimento.category as cat}
					<li class="text-tertiary">
						#{cat}
					</li>
				{/each}
			</ul>
			<p class="text-body-medium">{procedimento.description}</p>
		</Card>
	{/each}
</ul>

{#each ['email', 'number', 'password', 'search', 'tel', 'text', 'url', 'textarea'] as type}
	<Textfield {type} />
{/each}

<style>
	ul.grid {
		grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
	}
</style>
