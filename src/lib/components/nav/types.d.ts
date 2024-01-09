interface NavItem {
	title: string;
	href?: string;
	disabled?: boolean;
	external?: boolean;
	label?: string;
}

interface NavItemWithChildren extends NavItem {
	items?: NavItemWithChildren[];
}

interface SidebarNavItem extends NavItem {
	items: NavItemWithChildren[];
}
