<script lang="ts">
	import { Section } from '$lib/components/section';
	import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { buttonVariants, cn } from '$lib/utils';
	import Icon from '@iconify/svelte';
</script>
<!-- 
{#snippet condominioCard({ administradora_anterior, id, nome })}
	<Card class="w-full">
		<CardHeader class="flex-row items-center justify-between">
			<CardTitle tag="h1">{nome}</CardTitle>
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
				<p>Administradora - {administradora_anterior}</p>
			</div>
		</CardContent>
		<CardFooter class="w-full">
			<a href={`/condominios/${id}`} class={cn(buttonVariants({ variant: 'default' }))}>Acessar</a>
		</CardFooter>
	</Card>
{/snippet} -->

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

	<!-- <ul class="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
		{#each condominios as { administradora_anterior, id, nome }}
			{@render condominioCard({ administradora_anterior, id, nome })}
		{/each}
	</ul> -->
</Section>
