<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import { enableCache } from '@iconify/svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import {ModeWatcher} from 'mode-watcher';
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
</script>

<svelte:head>
	<title>APSA Apoiador</title>
	<meta name="description" content="Nosso Compromisso com o Talento e o Sucesso" />
</svelte:head>

<ModeWatcher/>

<Navbar />

<main class="min-h-[100dvh]">
	<slot />
</main>
