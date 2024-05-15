interface DocsConfig {
	mainNav: NavItemWithChildren[];
	sidebarNav: SidebarNavItem[];
}

export const routes = {
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
					href: '/comunicacao/entrada'
				},
				{
					title: 'Interna',
					href: '/comunicacao/interna'
				}
			]
		},
		{
			title: 'Documentos',
			items: [
				{
					title: 'Contratos',
					href: '/documentos/contrato'
				}
			]
		},
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
			title: 'Contratos',
			items: [
				{
					title: 'Contrato digital',
					href: '/procedimentos/contrato-digital'
				}
			]
		},
		{
			title: 'Requisição de Pagamento',
			items: [
				{
					title: 'Fundo Fixo',
					href: '/procedimentos/fundo-fixo'
				},
				{
					title: 'Pedidos de compra',
					href: '/procedimentos/como-pagar-pedido-de-compra'
				}
			]
		}
	]
} satisfies DocsConfig;
