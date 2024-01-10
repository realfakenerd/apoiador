<script lang="ts">
	import * as Section from '$lib/components/section';
	import * as Card from '$lib/components/ui/card';
	import type { PageServerData } from './$types';
	export let data: PageServerData;

	const { procedimentos } = data;
</script>

<Section.Root>
	<Section.Heading>Procedimentos</Section.Heading>

	<ul class="grid w-full gap-2">
		{#each procedimentos as procedimento}
			<a href="/procedimentos/{procedimento.slug}">
				<Card.Root>
					<Card.Header>
						<Card.Title>{procedimento.title}</Card.Title>
						<Card.Description>
							<ul class="inline-flex gap-2 text-label-large">
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
			</a>
		{/each}
	</ul>
</Section.Root>

<style>
	ul.grid {
		grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
	}
</style>
