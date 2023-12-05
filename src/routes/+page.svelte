<script lang="ts">
	import Wheater from '$lib/components/Wheater.svelte';
	import Icon from '@iconify/svelte';
	import { Map } from '$lib/components/map';
	import Marker from '$lib/components/map/Marker.svelte';
	import Card from '$lib/components/Card.svelte';

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
			link: 'https://apsa.com.br/',
			text: 'Site Apsa',
			icon: 'mdi:web'
		}
	];
</script>

<section class="flex flex-row flex-wrap gap-2">
	<Card title="Links úteis">
		<ul class="grid grid-cols-4 gap-2 place-items-center text-body-medium">
			{#each links as l}
				<a class="card card-compact bg-base-100 max-w-[10rem]" target="_blank" href={l.link}>
					<span class="card-body items-center p-2">
						<Icon width="24" icon={l.icon} />
						<span>{l.text}</span>
					</span>
				</a>
			{/each}
		</ul>
	</Card>
	<Wheater />
</section>
