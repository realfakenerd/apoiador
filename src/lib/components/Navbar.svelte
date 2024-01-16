<script lang="ts">
	import { auth } from '$lib/firebase';
	import Icon from '@iconify/svelte';
	import CommandMenu from './CommandMenu.svelte';
	import ModeToggle from './ModeToggle.svelte';
	import { MainNav, MobileNav } from './nav';
	import * as Avatar from './ui/avatar';
	import Button from './ui/button/button.svelte';
	import * as DropdownMenu from './ui/dropdown-menu';
	import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
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
						<DropdownMenu.Item class="cursor-pointer inline-flex justify-between w-full" on:click={() => signInWithPopup(auth,new GoogleAuthProvider())}><span>Entrar com</span> <Icon icon="devicon:google" /></DropdownMenu.Item>
					</DropdownMenu.Group>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</div>
	</div>
</header>
