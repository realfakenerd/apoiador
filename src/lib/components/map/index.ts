import type Leaflet from 'leaflet';
export { default as Marker } from './Marker.svelte';
export { default as Map } from './Map.svelte';
export { default as key } from './key';

export interface MapContext {
	getLeaflet: () => typeof Leaflet;
	getMap: () => Leaflet.Map;
}
