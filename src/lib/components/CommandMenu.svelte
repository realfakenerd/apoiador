<script lang="ts">
	import { goto } from '$app/navigation';
	import { resetMode, setMode } from 'mode-watcher';
	import { Circle, File, Laptop, Moon, Sun } from 'radix-icons-svelte';
	import { cn } from '../utils';
	import { routes } from './nav/routes';
	import { Button } from './ui/button';
	import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from './ui/command';

	let open = $state(false);

	$effect(() => {
		function handleKeydown(e: KeyboardEvent) {
			if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				open = true;
			}
		}
		addEventListener('keydown', handleKeydown);

		return () => {
			removeEventListener('keydown', handleKeydown);
		};
	});

	function runCommand(cmd: () => void) {
		open = false;
		cmd();
	}

	const mainNav = routes.mainNav.filter((item) => !item.external);
	const sidebarNav = routes.sidebarNav;

	let {...restProps} = $props<{restProps?: HTMLButtonElement}>();
</script>

<Button
	variant="outline"
	class={cn('relative w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64')}
	onclick={() => (open = true)}
	{...restProps}
>
	<span class="inline-flex">Pesquise... </span>
	<kbd
		class="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex"
	>
		<span class="text-xs">Ctrl</span>+ K
	</kbd>
</Button>
<CommandDialog bind:open>
	<CommandInput placeholder="Type a command or search" />
	<CommandList>
		<CommandEmpty>No results found.</CommandEmpty>
		<CommandGroup heading="Links">
			{#each mainNav as navItem}
				<CommandItem
					value={navItem.title}
					onSelect={() =>
						runCommand(() => {
							navItem.href && goto(navItem.href);
						})}
				>
					<File class="mr-2 h-4 w-4" />
					{navItem.title}
				</CommandItem>
			{/each}
		</CommandGroup>
		{#each sidebarNav as group}
			<CommandGroup heading={group.title}>
				{#each group.items as navItem}
					<CommandItem
						value={navItem.title}
						onSelect={() =>
							runCommand(() => {
								navItem.href && goto(navItem.href);
							})}
					>
						<div class="mr-2 flex h-4 w-4 items-center justify-center">
							<Circle class="h-3 w-3" />
						</div>
						{navItem.title}
					</CommandItem>
				{/each}
			</CommandGroup>
		{/each}
		<CommandSeparator />
		<CommandGroup heading="Theme">
			<CommandItem value="light" onSelect={() => runCommand(() => setMode('light'))}>
				<Sun class="mr-2 h-4 w-4" />
				Light
			</CommandItem>
			<CommandItem value="dark" onSelect={() => runCommand(() => setMode('dark'))}>
				<Moon class="mr-2 h-4 w-4" />
				Dark
			</CommandItem>
			<CommandItem value="system" onSelect={() => runCommand(() => resetMode())}>
				<Laptop class="mr-2 h-4 w-4" />
				System
			</CommandItem>
		</CommandGroup>
	</CommandList>
</CommandDialog>
