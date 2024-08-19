<script lang="ts">
	import Wheater from '$lib/components/Wheater.svelte';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { cn, links } from '$lib/utils';
	import Icon from '@iconify/svelte';

	let blob: HTMLElement;

	function blobing(event: MouseEvent) {
		const { clientX, clientY } = event;

		blob.animate(
			{
				left: `${clientX}px`,
				top: `${clientY}px`
			},
			{ duration: 3000, fill: 'forwards', easing: 'ease-in-out' }
		);
	}
</script>

<svelte:body onmousemove={blobing} />

<section class="container relative">
	<div class="flex flex-col gap-10 py-8">
		<header class="flex justify-between items-center flex-col md:flex-row">
			<h1 class="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
				Dashboard
			</h1>
			<Wheater />
		</header>
		<Card class="border-none">
			<CardHeader>
				<CardTitle tag="h1">Acesso Rápido</CardTitle>
			</CardHeader>
			<CardContent class="grid w-full gap-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
				{#each links as l}
					<Card
						class={cn(
							` min-w-[14rem] rounded-[.25rem] hover:rounded-xl transition-all first:rounded-tl-xl last:rounded-br-xl min-h-[72px] w-full hover:border-primary`
						)}
					>
						<a href={l.link} target="_blank">
							<CardHeader class="flex flex-row items-center justify-between">
								<CardTitle tag="h3">
									<span class="text-title-small">{l.text}</span>
								</CardTitle>
								<Icon style="margin-top: 0;" width="24" icon={l.icon} />
							</CardHeader>
						</a>
					</Card>
				{/each}
			</CardContent>
		</Card>
	</div>

	<div
		class="blob bg-gradient-to-r from-primary via-primary to-green-400 rounded-full"
		bind:this={blob}
	></div>
</section>

<style>
	.blob {
		position: fixed;
		z-index: -2;
		height: 200px;
		aspect-ratio: 1;
		left: 50%;
		top: 50%;
		translate: -50% -50%;
		filter: blur(100px);
		animation: rotate 20s infinite;
	}

	@keyframes rotate {
		form {
			rotate: 0deg;
		}

		50% {
			scale: 1 1.5;
		}

		to {
			rotate: 360deg;
		}
	}
</style>
