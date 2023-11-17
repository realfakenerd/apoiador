<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import Navbar from '$lib/components/Navbar.svelte';
	import { enableCache } from '@iconify/svelte';
	import '@fontsource-variable/noto-sans-display';
	import '../app.css';
	import '../styles/theme.css';

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
	export let data;
</script>

<svelte:head>
	<title>ABS Pinturas & Reformas</title>
	<meta name="description" content="Nosso Compromisso com o Talento e o Sucesso" />
</svelte:head>

<Navbar currentRoute={data.currentRoute} />

<main class="flex-1 overflow-auto p-2 min-h-[100dvh]">
	<slot />
</main>
