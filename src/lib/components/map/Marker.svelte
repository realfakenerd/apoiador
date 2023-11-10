<script lang="ts">
	import { createEventDispatcher, getContext } from "svelte";
	import { key, type MapContext } from ".";

    export let lat: number;
    export let lon: number;
    export let label: string;

    const {getLeaflet, getMap} = getContext<MapContext>(key);

    const leaflet = getLeaflet();
    const map = getMap();

    const marker = leaflet.marker([lat, lon]).addTo(map);
    marker.bindPopup(label);

    const dispatch = createEventDispatcher();

    marker.on('popupopen', () => dispatch('open'));
    marker.on('popupclose', () => dispatch('close'));
</script>

<style>
    :global(.leaflet-popup-content) {
        @apply text-label-large;
    }
</style>