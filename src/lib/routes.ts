import type { IconifyIcon } from '@iconify/svelte';

interface Route {
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
		name: 'CI',
		path: '/ci',
		icon: 'mdi:cog'
	}
] as Route[];
