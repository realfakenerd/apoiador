<script lang="ts">
	import key from './key';
	import type Leafleft from 'leaflet';
	import 'leaflet/dist/leaflet.css';
	import { onMount, setContext, type Snippet } from 'svelte';

	let {
		lat = 0,
		lon = 0,
		zoom = 0,
		children
	} = $props<{
		lat: number;
		lon: number;
		zoom: number;
		children: Snippet;
	}>();

	let leaflet = $state<typeof Leafleft | null>(null);
	let leafletMap = $state<Leafleft.Map | null>(null);
	let mapEl = $state<HTMLDivElement | null>(null);

	setContext(key, {
		getLeaflet: () => leaflet,
		getMap: () => leafletMap
	});

	$effect(() => {
		import('leaflet').then((mod) => (leaflet = mod));
		leafletMap = leaflet?.map(mapEl as any).setView([lat, lon], zoom) as any;
		leaflet?.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(leafletMap as any);

		() => {
			leafletMap = null;
			leaflet = null as any;
		};
	});
</script>

<div bind:this={mapEl} class="card p-0 card-filled max-w-lg w-full h-96" />

{#if leaflet && leafletMap}
	{@render children()}
{/if}
