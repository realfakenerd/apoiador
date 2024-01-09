interface DocsConfig {
	mainNav: NavItemWithChildren[];
	sidebarNav: SidebarNavItem[];
}

export const routes: DocsConfig = {
	mainNav: [
		{
			title: 'Procedimentos',
			href: '/procedimentos'
		},
		{
			title: 'Condomínios',
			href: '/condominios'
		},
		{
			title: 'Comunicação',
			items: [
				{
					title: 'Entrada',
					href: '/comunicacao'
				},
				{
					title: 'Interna',
					href: '/comunicacao/interna'
				}
			]
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
