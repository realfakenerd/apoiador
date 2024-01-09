<script lang="ts">
	import { page } from '$app/stores';
	import TableOfContents from '$lib/components/TableOfContent.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	type Component = $$Generic<typeof SvelteComponent<any, any, any>>;
	$: component = data.component as Component;
	$: meta = data.meta;
</script>

<section class="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
	<div class="mx-auto w-full min-w-0">
		<header>
			<h2 class="text-lg font-medium text-muted-foreground">{meta.description}</h2>
			<h1 class="text-4xl font-bold tracking-tight">{meta.title}</h1>
		</header>
		<hr class="my-2" />
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
