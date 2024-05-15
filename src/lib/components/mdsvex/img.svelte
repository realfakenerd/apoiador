<script lang="ts">
	import { cn } from '$lib/utils';
	import Icon from '@iconify/svelte';
	import type { HTMLImgAttributes } from 'svelte/elements';
	import Button from '../ui/button/button.svelte';

	interface Props {
		class?: string;
		src: HTMLImgAttributes['src'];
		alt: HTMLImgAttributes['alt'];
	}

	let { class: className = undefined, src = undefined, alt = undefined }: Props = $props();

	let img: HTMLImageElement;

	function fullscreen() {
		if (!img) return;
		img.requestFullscreen();
	}
</script>

<section class="py-2 relative">
	<figure>
		<img bind:this={img} {src} {alt} loading="lazy" class={cn('rounded-md', className)} />
	</figure>
	<Button
		onclick={fullscreen}
		variant="ghost"
		size="icon"
		class="absolute rounded-full ring-1 ring-primary bg-background/30 right-4 top-4"
	>
		<Icon width="24px" icon="mdi:fullscreen" />
	</Button>
</section>
