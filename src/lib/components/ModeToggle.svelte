<script lang="ts">
	import Icon from '@iconify/svelte';
	import { resetMode, setMode } from 'mode-watcher';
	import { Button } from './ui/button';
	import {
		DropdownMenu,
		DropdownMenuContent,
		DropdownMenuItem,
		DropdownMenuTrigger
	} from './ui/dropdown-menu';
</script>

<DropdownMenu>
	<DropdownMenuTrigger >
		<Button variant="ghost" class="w-9 px-0">
			<Icon
				class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-roate-90 dark:scale-0"
				icon="mdi:lightbulb-on"
			/>
			<Icon
				class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
				icon="mdi:lightbulb-outline"
			/>
			<span class="sr-only">Toggle theme</span>
		</Button>
	</DropdownMenuTrigger>
	<DropdownMenuContent align={{placement: 'bottom-end'}} class="max-w-32">
		<DropdownMenuItem class="inline-flex justify-between w-full" onclick={() => setMode('light')}>
			<span>Light</span>
			<Icon class="h-[1.2rem] w-[1.2rem]" icon="mdi:lightbulb-on" />
		</DropdownMenuItem>
		<DropdownMenuItem class="inline-flex justify-between w-full" onclick={() => setMode('dark')}>
			<span>Dark</span>
			<Icon class="h-[1.2rem] w-[1.2rem]" icon="mdi:lightbulb-outline" />
		</DropdownMenuItem>
		<DropdownMenuItem class="inline-flex justify-between w-full" onclick={() => resetMode()}>
			<span>System</span>
			<Icon class="h-[1.2rem] w-[1.2rem]" icon="mdi:laptop" />
		</DropdownMenuItem>
	</DropdownMenuContent>
</DropdownMenu>
