<script lang="ts">
	import CommandMenu from './CommandMenu.svelte';
	import ModeToggle from './ModeToggle.svelte';
	import { MainNav, MobileNav } from './nav';
	import * as Avatar from './ui/avatar';
	import * as DropdownMenu from './ui/dropdown-menu';
</script>

<header
	style="view-timeline-name: navigation;"
	class="supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/95 shadow-sm backdrop-blur print:hidden"
>
	<div class="container flex h-14 items-center gap-x-2 sm:gap-x-4">
		<MainNav />
		<MobileNav />
		<div class="flex flex-1 items-center justify-between gap-x-2 sm:gap-x-4 md:justify-end">
			<div class="w-full flex-1 md:w-auto md:flex-none">
				<CommandMenu />
			</div>
			<ModeToggle />
			<DropdownMenu.Root>
				<DropdownMenu.Trigger>
					<Avatar.Root>
						<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
						<Avatar.Fallback>LI</Avatar.Fallback>
					</Avatar.Root>
				</DropdownMenu.Trigger>
				<DropdownMenu.Content>
					<DropdownMenu.Group>
						<DropdownMenu.Label>Minha Conta</DropdownMenu.Label>
						<DropdownMenu.Separator />
						<DropdownMenu.Item>Profile</DropdownMenu.Item>
						<DropdownMenu.Item>Billing</DropdownMenu.Item>
						<DropdownMenu.Item>Team</DropdownMenu.Item>
						<DropdownMenu.Item>Subscription</DropdownMenu.Item>
					</DropdownMenu.Group>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</div>
	</div>
</header>
