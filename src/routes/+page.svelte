<script lang="ts">
	import Wheater from '$lib/components/Wheater.svelte';
	import { Section, SectionHeading, SectionTitle } from '$lib/components/section';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { cn } from '$lib/utils';
	import Icon from '@iconify/svelte';

	const links = [
		{
			link: 'http://10.99.1.42/webponto/',
			text: 'Web Ponto',
			icon: 'mdi:clock'
		},
		{
			link: 'http://apsant42/GHQUIOSQUEV41/Default.aspx',
			text: 'Contracheque',
			icon: 'mdi:cash'
		},
		{
			link: 'http://apsant113/CFA/',
			text: 'Consulta de Férias',
			icon: 'mdi:party-popper'
		},
		{
			link: 'https://tiapsa.on.spiceworks.com/portal/registrations',
			text: 'Helpdesk',
			icon: 'mdi:desktop-tower-monitor'
		},
		{
			link: 'http://apsant40:27700/12535a81x1918q101do251281ev4/',
			text: 'Casa 41',
			icon: 'mdi:tools'
		},
		{
			link: 'https://apsa.ead.voxeldigital.com.br/',
			text: 'Apsa EAD',
			icon: 'mdi:school-outline'
		},
		{
			link: 'http://apsant113/sr/',
			text: 'Sala de Reunião',
			icon: 'mdi:account-group'
		},
		{
			link: 'https://apsa-one.vercel.app/',
			text: 'Site Apsa',
			icon: 'mdi:web'
		}
	];
</script>

<Section>
	<SectionHeading class="justify-between items-center flex-col md:flex-row">
		<SectionTitle>Dashboard</SectionTitle>
		<Wheater />
	</SectionHeading>
	<Card class="border-none">
		<CardHeader>
			<CardTitle tag="h1">Acesso Rápido</CardTitle>
		</CardHeader>
		<CardContent class="grid w-full gap-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
			{#each links as l}
				<Card
					class={cn(
						`min-w-[14rem] rounded-[.25rem] hover:rounded-xl transition-all first:rounded-tl-xl last:rounded-br-xl min-h-[72px] w-full hover:border-primary`
					)}
				>
					<a href={l.link} target="_blank">
						<CardHeader class="flex flex-row items-center justify-between">
							<CardTitle tag="h3">
								<span class="text-title-small">{l.text}</span>
							</CardTitle>
							<Icon style="margin-top: 0;" width="24" icon={l.icon} />
						</CardHeader>
					</a>
				</Card>
			{/each}
		</CardContent>
	</Card>
</Section>

<style>
	@media screen and (max-width: 639px) {
		.grid a:nth-child(1) {
			border-top-right-radius: 0.75rem;
		}

		.grid a:nth-child(8) {
			border-bottom-left-radius: 0.75rem;
		}
	}
	@media screen and (max-width: 640px) {
		.grid a:nth-child(2) {
			border-top-right-radius: 0.75rem;
		}

		.grid a:nth-child(7) {
			border-bottom-left-radius: 0.75rem;
		}
	}

	@media screen and (min-width: 768px) {
		.grid a:nth-child(4) {
			background-color: red;
			border-top-right-radius: 0.75rem;
		}

		.grid a:nth-child(5) {
			border-bottom-left-radius: 0.75rem;
		}
	}
</style>
