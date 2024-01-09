<script lang="ts">
	import { getContext } from 'svelte';
	import { key, type MapContext } from '.';

	export let lat = 0;
	export let lon = 0;
	export let label = '';
	export let open: () => void;
	export let close: () => void;

	const { getLeaflet, getMap } = getContext<MapContext>(key);

	const leaflet = getLeaflet();
	const map = getMap();

	const marker = leaflet.marker([lat, lon]).addTo(map);
	marker.bindPopup(label);

	marker.on('popupopen', () => open());
	marker.on('popupclose', () => close());
</script>

<style>
	:global(.leaflet-popup-content) {
		@apply text-label-large;
	}
</style>
