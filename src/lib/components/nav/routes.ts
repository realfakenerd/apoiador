interface DocsConfig {
	mainNav: NavItem[];
	sidebarNav: SidebarNavItem[];
}

export const routes: DocsConfig = {
	mainNav: [
		{
			title: 'Inicio',
			href: '/'
		},
		{
			title: 'Procedimentos',
			href: '/procedimentos'
		},
		{
			title: 'Condomínios',
			href: '/condominios'
		}
	],
	sidebarNav: [
		{
			title: 'Procedimentos de comunicação',
			items: [
				{
					title: 'CI',
					href: '/procedimentos/ci'
				}
			]
		},
		{
			title: 'MXM',
			items: [
				{
					title: 'Fundo Fixo',
					href: '/procedimentos/fundo-fixo'
				}
			]
		}
	]
};
