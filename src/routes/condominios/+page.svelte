<script lang="ts">
	import * as Section from '$lib/components/section';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import Icon from '@iconify/svelte';

	// const condominios = collectionStore<{ nome: string }>(firestore, 'condominios', []);
</script>

<Section.Root>
	<header class="flex flex-row justify-between items-center">
		<Section.Heading>Condomínios</Section.Heading>
		<Button href="/condominios/novo" class="flex gap-2">
			<Icon icon="mdi:plus" />
			<span>Empresa</span>
		</Button>
	</header>
	
	<ul class="flex flex-wrap gap-4">
		<li class="max-w-xs">
			<Card.Root>
				<Card.Header class="flex-row items-center justify-between">
					<Card.Title tag="h1">Solarium</Card.Title>
					<Icon icon="mdi:office-building" />
				</Card.Header>
				<Card.Content class="[&>div]:inline-flex [&>div]:gap-2 [&>div]:items-center">
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
				</Card.Content>
				<Card.Footer class="w-full">
					<Button href="#" class="w-full">Acessar</Button>
				</Card.Footer>
			</Card.Root>
		</li>
		<li class="max-w-xs">
			<Card.Root>
				<Card.Header class="flex-row items-center justify-between">
					<Card.Title tag="h1">Solarium</Card.Title>
					<Icon icon="mdi:office-building" />
				</Card.Header>
				<Card.Content class="[&>div]:inline-flex [&>div]:gap-2 [&>div]:items-center">
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
				</Card.Content>
				<Card.Footer class="w-full">
					<Button href="/condominios/maraba" class="w-full">Acessar</Button>
				</Card.Footer>
			</Card.Root>
		</li>
	</ul>
</Section.Root>
