<script lang="ts">
	import { Section, SectionHeading, SectionTitle } from '$lib/components/section';
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '$lib/components/ui/card';
	import Icon from '@iconify/svelte';
	import {cn} from '$lib/utils'

	// const condominios = collectionStore<{ nome: string }>(firestore, 'condominios', []);
</script>

<Section>
	<SectionHeading class="justify-between items-center">
		<SectionTitle>Condomínios</SectionTitle>
		<a href="/condominios/novo" class={cn("flex gap-2")}>
			<Icon icon="mdi:plus" />
			<span>Empresa</span>
		</a>
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
					<a href="#" class="w-full">Acessar</a>
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
					<a href="/condominios/maraba" class="w-full">Acessar</a>
				</CardFooter>
			</Card>
		</li>
	</ul>
</Section>
