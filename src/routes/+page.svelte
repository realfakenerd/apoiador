<script lang="ts">
	import Wheater from '$lib/components/Wheater.svelte';
	import * as Card from '$lib/components/ui/card';
	import Icon from '@iconify/svelte';
	import * as Section from '$lib/components/section';

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

<Section.Root>
	<Section.Heading>Dashboard</Section.Heading>
	<div class="grid w-full gap-2">
		{#each links as l}
			<a target="_blank" href={l.link}>
				<Card.Root class="min-w-[14rem] w-full hover:border-primary transition-colors">
					<Card.Header class="flex flex-row items-center justify-between">
						<Card.Title>
							<span class="text-title-small">{l.text}</span>
						</Card.Title>
						<Icon style="margin-top: 0;" width="24" icon={l.icon} />
					</Card.Header>
				</Card.Root>
			</a>
		{/each}
	</div>
	<Wheater />
</Section.Root>

<style>
	div.grid {
		grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
	}
</style>
