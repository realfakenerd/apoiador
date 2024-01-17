<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import Icon from '@iconify/svelte';
	import * as Section from '$lib/components/section';

	// const condominios = collectionStore<{ nome: string }>(firestore, 'condominios', []);
</script>

<Section.Root>
	<Section.Heading>Condomínios</Section.Heading>
	
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
					<Button href="#" class="w-full">Acessar</Button>
				</Card.Footer>
			</Card.Root>
		</li>
	</ul>
</Section.Root>
