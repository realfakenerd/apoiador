<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import Navbar from '$lib/components/Navbar.svelte';
	import { enableCache } from '@iconify/svelte';
	import { ModeWatcher } from 'mode-watcher';
	import '../app.css';
	import '../post.css';

	enableCache('local');
	onNavigate((navigation) => {
		if (!document.startViewTransition) return;
		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	let { data, children } = $props();
</script>

<svelte:head>
	<title>APSA Apoiador</title>
	<meta name="description" content="Nosso Compromisso com o Talento e o Sucesso" />
</svelte:head>

<ModeWatcher />

<Navbar />

<main style="view-timeline-name: main;" class="flex-1">
	{@render children()}
</main>

<svg>
	<filter id="noiseFilter">
		<feTurbulence type="turbulence" baseFrequency="0.6" stitchTiles="stitch" />
		<feColorMatrix in="colorNoise" type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
		<feComposite operator="in" in2="SourceGraphic" result="monoNoise" />
		<feBlend in="SourceGraphic" in2="monoNoise" mode="screen" />
	</filter>
</svg>

<style lang="postcss">
	main {
		&::after,
		&::before {
			content: '';
			position: absolute;
			inset: 0;
			width: 100%;
			min-height: 100%;

			opacity: 0.1;
			z-index: -1;
		}

		&::before {
			background: theme('colors.background');
			filter: url(#noiseFilter);
			min-height: 100%;
		}
	}
</style>
