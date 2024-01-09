<script lang="ts">
	import key from './key';
	import type Leafleft from 'leaflet';
	import 'leaflet/dist/leaflet.css';
	import { onMount, setContext } from 'svelte';

	export let lat = 0;
	export let lon = 0;
	export let zoom = 0;

	let leaflet: typeof Leafleft | null = null;
	let leafletMap: Leafleft.Map | null = null;
	let mapEl: HTMLDivElement | null = null;

	setContext(key, {
		getLeaflet: () => leaflet,
		getMap: () => leafletMap
	});

	onMount(() => {
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
