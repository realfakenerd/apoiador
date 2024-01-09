<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import { enableCache } from '@iconify/svelte';
	import Navbar from '$lib/components/Navbar.svelte';
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
	// export let data;
</script>

<svelte:head>
	<title>APSA Apoiador</title>
	<meta name="description" content="Nosso Compromisso com o Talento e o Sucesso" />
</svelte:head>

<Navbar />

<main class="min-h-[100dvh]">
	<slot />
</main>
