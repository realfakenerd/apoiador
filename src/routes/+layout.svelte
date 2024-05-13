<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import Navbar from '$lib/components/Navbar.svelte';
	import FirebaseApp from '$lib/firebase/components/FirebaseApp.svelte';
	import { auth, firestore } from '$lib/firebase/index';
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
</script>

<svelte:head>
	<title>APSA Apoiador</title>
	<meta name="description" content="Nosso Compromisso com o Talento e o Sucesso" />
</svelte:head>

<ModeWatcher />

<FirebaseApp {firestore} {auth}>
	<Navbar />
	<main class="flex-1 bg-neutral-900 min-h-[100vh]">
		<slot />
	</main>
</FirebaseApp>