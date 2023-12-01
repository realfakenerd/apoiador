<script lang="ts">
	import { key } from '$lib/components/map';
	import type Leafleft from 'leaflet';
	import 'leaflet/dist/leaflet.css';
	import { setContext } from 'svelte';

	interface Props {
		lat: number;
		lon: number;
		zoom: number;
	}

	let { lat, lon, zoom } = $props<Props>();

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
	<slot />
{/if}
