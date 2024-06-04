<script lang="ts">
	import { goto, invalidate, onNavigate } from '$app/navigation';
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
	const { supabase, session } = data;

	$effect(() => {
		const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
			if (!newSession) {
				setTimeout(() => {
					goto('/', { invalidateAll: true });
				});
			}

			if (newSession?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => data.subscription.unsubscribe();
	});
</script>

<svelte:head>
	<title>APSA Apoiador</title>
	<meta name="description" content="Nosso Compromisso com o Talento e o Sucesso" />
</svelte:head>

<ModeWatcher />

<Navbar {session}/>
<main style="view-timeline-name: main;" class="flex-1 bg-neutral-900 min-h-[100vh]">
	{@render children()}
</main>
