import type { IconifyIcon } from '@iconify/svelte';

export interface Route {
	name: string;
	path: string;
	icon: IconifyIcon | string;
}

export default [
	{
		name: 'Inicio',
		path: '/',
		icon: 'mdi:home'
	},
	{
		name: 'Procedimentos',
		path: '/procedimentos',
		icon: 'mdi:cog'
	},
	{
		name: 'Condomínios',
		path: '/condominios',
		icon: 'mdi:building'
	}
	// {
	// 	name: 'CI',
	// 	path: '/ci',
	// 	icon: 'mdi:cog'
	// }
] as Route[];
