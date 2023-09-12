<script lang="ts">
	import Wheater from '$lib/components/Wheater.svelte';
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
            link: 'https://apsa.com.br/',
            text: 'Site Apsa',
            icon: 'mdi:web'
        },
    ]
</script>

<section class="flex flex-row flex-wrap gap-2">
	<div class="card gap-2 max-w-2xl interactive-bg-surface-variant">
		<h1 class="text-title-large">Links uteis</h1>
		<ul class="grid grid-cols-4 gap-y-2 place-items-center text-body-medium">
            {#each links as l}
                <a target="_blank" href={l.link}>
                    <Icon width="24" icon={l.icon}/>
                    <span>{l.text}</span>
                </a>
            {/each}
		</ul>
	</div>
	<Wheater />
</section>

<style>
	.grid a {
		@apply card rounded-[0.25rem] items-center py-1 interactive-bg-surface justify-center;
	}

    .grid a:hover {
        @apply underline;
    }
</style>
