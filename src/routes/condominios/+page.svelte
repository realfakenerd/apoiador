<script lang="ts">
	import { Section, SectionHeading, SectionTitle } from '$lib/components/section';
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '$lib/components/ui/card';
	import Icon from '@iconify/svelte';
	import { buttonVariants, cn } from '$lib/utils';

	// const condominios = collectionStore<{ nome: string }>(firestore, 'condominios', []);
</script>

{#snippet condominioCard()}
	<Card class="w-full">
		<CardHeader class="flex-row items-center justify-between">
			<CardTitle tag="h1">Solarium</CardTitle>
			<Icon icon="mdi:office-building" />
		</CardHeader>
		<CardContent class="flex flex-col [&>div]:inline-flex [&>div]:gap-2 [&>div]:items-center">
			<div>
				<Icon class="text-primary" icon="mdi:map-marker" />
				<p>Rua Abril, 19 - Botafogo</p>
			</div>
			<div>
				<Icon class="text-primary" icon="mdi:account" />
				<p>Sindico - José Silva</p>
			</div>
			<div>
				<Icon class="text-primary" icon="mdi:briefcase" />
				<p>Administradora - APSA</p>
			</div>
		</CardContent>
		<CardFooter class="w-full">
			<a href="/condominios/maraba" class={cn(buttonVariants({variant: 'default'}))}>Acessar</a>
		</CardFooter>
	</Card>
{/snippet}

<Section>
	<header class="flex flex-col md:flex-row gap-y-1 justify-between items-center w-full">
		<hgroup>
			<h2 class="text-2xl">Condomínios</h2>
			<p class="text-muted-foreground">A lista de condomínios em noss banco de dados</p>
		</hgroup>
		<a href="/condominios/novo" class={cn('flex gap-2', buttonVariants({ variant: 'default' }))}>
			<Icon icon="mdi:plus" />
			<span>Empresa</span>
		</a>
	</header>

	<ul class="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
		{@render condominioCard()}
		{@render condominioCard()}
		{@render condominioCard()}
		{@render condominioCard()}
	</ul>
</Section>
