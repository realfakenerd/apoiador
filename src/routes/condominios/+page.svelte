<script lang="ts">
	import { Section, SectionHeading, SectionTitle } from '$lib/components/section';
	import { Button } from '$lib/components/ui/button';
	import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '$lib/components/ui/card';
	import Icon from '@iconify/svelte';

	// const condominios = collectionStore<{ nome: string }>(firestore, 'condominios', []);
</script>

<Section>
	<SectionHeading class="justify-between items-center">
		<SectionTitle>Condomínios</SectionTitle>
		<Button href="/condominios/novo" class="flex gap-2">
			<Icon icon="mdi:plus" />
			<span>Empresa</span>
		</Button>
	</SectionHeading>

	<ul class="flex flex-wrap gap-4">
		<li class="max-w-xs">
			<Card>
				<CardHeader class="flex-row items-center justify-between">
					<CardTitle tag="h1">Solarium</CardTitle>
					<Icon icon="mdi:office-building" />
				</CardHeader>
				<CardContent class="[&>div]:inline-flex [&>div]:gap-2 [&>div]:items-center">
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
					<Button href="#" class="w-full">Acessar</Button>
				</CardFooter>
			</Card>
		</li>
		<li class="max-w-xs">
			<Card>
				<CardHeader class="flex-row items-center justify-between">
					<CardTitle tag="h1">Solarium</CardTitle>
					<Icon icon="mdi:office-building" />
				</CardHeader>
				<CardContent class="[&>div]:inline-flex [&>div]:gap-2 [&>div]:items-center">
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
					<Button href="/condominios/maraba" class="w-full">Acessar</Button>
				</CardFooter>
			</Card>
		</li>
	</ul>
</Section>
