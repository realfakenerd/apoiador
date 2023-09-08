import type {IconifyIcon} from '@iconify/svelte'

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
        name: 'sobre',
        path: '/sobre',
        icon: 'mdi:about'
    },
    {
        name: 'Serviços',
        path: '/servicos',
        icon: 'mdi:work'
    },
    {
        name: 'Contato',
        path: '/contato',
        icon: 'mdi:smartphone'
    },
] as Route[]