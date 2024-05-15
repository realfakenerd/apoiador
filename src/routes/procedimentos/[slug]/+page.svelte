<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import { page } from '$app/stores';
	import TableOfContents from '$lib/components/TableOfContent.svelte';

	let { data } = $props();

	let component = $derived<typeof SvelteComponent<any, any, any>>(data.component);
	let meta = $derived(data.meta);
</script>

<section class="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
	<div class="mx-auto w-full min-w-0">
		<header class="flex flex-col gap-0.5">
			<h2 class="text-2xl">{meta.title}</h2>
			<p class="text-muted-foreground">
				{meta.description}
			</p>
		</header>
		<hr class="my-2 border-primary" />
		<article class="pt-8 mdsvex" id="mdsvex">
			<svelte:component this={component} />
		</article>
	</div>
	<div class="hidden text-sm xl:block">
		<div class="sticky top-16 -mt-10 h-[calc(100vh-3.5rem)] overflow-hidden pt-6">
			{#key $page.url.pathname}
				<TableOfContents />
			{/key}
		</div>
	</div>
</section>
