<script lang="ts">
	import { getContext } from 'svelte';
	import { key, type MapContext } from '.';

	interface Props {
		lat: number;
		lon: number;
		label: string;
		open: () => void;
		close: () => void;
	}
	let { lat = 0, lon = 0, label = '', open, close }: Props = $props();

	const { getLeaflet, getMap } = getContext<MapContext>(key);

	const leaflet = getLeaflet();
	const map = getMap();

	const marker = leaflet.marker([lat, lon]).addTo(map);
	marker.bindPopup(label);

	marker.on('popupopen', () => open());
	marker.on('popupclose', () => close());
</script>
