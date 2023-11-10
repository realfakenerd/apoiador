<script lang="ts">
    import {onDestroy, onMount, setContext} from 'svelte';
    import 'leaflet/dist/leaflet.css';
    import type Leafleft from 'leaflet';
    import {key} from '$lib/components/map';
    
    export let lat: number;
    export let lon: number;
    export let zoom: number;
    
    let leaflet: typeof Leafleft | null;
    let leafletMap: Leafleft.Map | null;
    let mapEl: HTMLDivElement;

    setContext(key, {
        getLeaflet: () => leaflet,
        getMap: () => leafletMap
    })
    
    onMount(async () => {
        leaflet = await import('leaflet');
        leafletMap = leaflet.map(mapEl).setView([lat,lon], zoom);
        leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(leafletMap);
    })

    onDestroy(() => {
        leafletMap = null;
        leaflet = null;
    })
</script>

<div bind:this={mapEl} class="card p-0 card-filled max-w-lg w-full h-96" />

{#if leaflet && leafletMap}
    <slot/>
{/if}

