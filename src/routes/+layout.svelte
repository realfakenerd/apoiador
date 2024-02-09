<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import Navbar from '$lib/components/Navbar.svelte';
	import { enableCache } from '@iconify/svelte';
	import { ModeWatcher } from 'mode-watcher';
	import '../app.css';
	import '../post.css';
	import { userStore } from '$lib/firebase/store/auth.svelte';
	import { auth, firestore } from '$lib/firebase/index';
	import FirebaseApp from '$lib/firebase/components/FirebaseApp.svelte';

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
	<main class="flex-1">
		<slot />
	</main>
</FirebaseApp>
