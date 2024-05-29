<script lang="ts">
	import CommandMenu from './CommandMenu.svelte';
	import ModeToggle from './ModeToggle.svelte';
	import { MainNav, MobileNav } from './nav';
</script>

<header
	style="view-transition-name: navigation;"
	class="supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/95 shadow-xl backdrop-blur print:hidden"
>
	<div class="container flex py-4 items-center gap-x-2 sm:gap-x-4">
		<MainNav />
		<MobileNav />
		<div class="flex flex-1 items-center justify-between gap-x-2 sm:gap-x-4 md:justify-end">
			<div class="w-full flex-1 md:w-auto md:flex-none">
				<CommandMenu />
			</div>
			<ModeToggle />
		</div>
	</div>
</header>
