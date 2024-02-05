<script lang="ts">
	import { resetMode, setMode } from 'mode-watcher';
	import { Moon, Sun } from 'radix-icons-svelte';
	import { Button } from './ui/button';
	import {
		DropdownMenu,
		DropdownMenuContent,
		DropdownMenuItem,
		DropdownMenuTrigger
	} from './ui/dropdown-menu';
</script>

<DropdownMenu>
	<DropdownMenuTrigger asChild let:builder>
		<Button builders={[builder]} variant="ghost" class="w-9 px-0">
			<Sun
				class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-roate-90 dark:scale-0"
			/>
			<Moon
				class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
			/>
			<span class="sr-only">Toggle theme</span>
		</Button>
	</DropdownMenuTrigger>
	<DropdownMenuContent align="end">
		<DropdownMenuItem onclick={() => setMode('light')}>Light</DropdownMenuItem>
		<DropdownMenuItem onclick={() => setMode('dark')}>Dark</DropdownMenuItem>
		<DropdownMenuItem onclick={() => resetMode()}>System</DropdownMenuItem>
	</DropdownMenuContent>
</DropdownMenu>
