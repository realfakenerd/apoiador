interface NavItem {
	title?: string;
	href?: string;
	disabled?: boolean;
	external?: boolean;
	label?: string;
}

interface SidebarNavItem extends NavItem {
	items: NavItem[];
}

interface NavItemWithChildren extends NavItem {
	items: NavItemWithChildren[];
}
