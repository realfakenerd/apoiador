<script lang="ts">
	import Icon from '@iconify/svelte';
	import { createDialog, melt } from '@melt-ui/svelte';
	import { setMode } from 'mode-watcher';
	import { fade } from 'svelte/transition';
	import { cn, flyAndScale } from '../utils';
	import { routes } from './nav/routes';
	import { easeEmphasizedAccel, easeEmphasizedDecel } from './nav/transition';
	import { buttonVariants } from './ui/button';

	const {
		elements: { trigger, portalled, overlay, content, title },
		states: { open }
	} = createDialog();

	function runCommand(cmd: () => void) {
		open.set(false);
		cmd();
	}

	const mainNav = routes.mainNav.filter((item) => !item.external);
	const sidebarNav = routes.sidebarNav;
</script>

<svelte:window
	onkeydown={(e) => {
		if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
			e.preventDefault();
			open.update((bool) => !bool);
		}
	}}
/>

<button
	class={cn(
		buttonVariants({ variant: 'outline' }),
		'relative w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64'
	)}
	use:melt={$trigger}
>
	<span class="inline-flex">Pesquise... </span>
	<kbd
		class="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex"
	>
		<span class="text-xs">Ctrl</span>+ K
	</kbd>
</button>

{#if $open}
	<div use:melt={$portalled}>
		<div
			use:melt={$overlay}
			class="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
			transition:fade={{ duration: 150 }}
		>
			<!--  -->
		</div>
		<div
			use:melt={$content}
			in:flyAndScale={{ duration: 400, start: 0, easing: easeEmphasizedDecel }}
			out:flyAndScale={{ duration: 200, easing: easeEmphasizedAccel }}
			class={cn(
				'bg-popover text-popover-foreground',
				'fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
				'max-w-[450px] z-50 max-h-[85vh] w-[90vw] p-2',
				'flex flex-col overflow-hidden rounded-md ring ring-foreground'
			)}
		>
			<div class="flex items-center border-b px-3">
				<Icon class="mr-2 h-4 w-4 shrink-0 opacity-50" icon="mdi:search" />
				<input
					type="search"
					placeholder="Pesquise por procedimentos ou condomínios..."
					class="flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
				/>
			</div>

			<section class="max-h-[300px] overflow-y-auto overflow-x-hidden">
				<ul class="overflow-hidden p-1 text-foreground">
					<li class="px-2 py-1.5 text-xs font-medium text-muted-foreground">Links</li>
					{#each mainNav as navItem, i (i)}
						<a
							href={navItem.href}
							onclick={() => open.set(false)}
							class="hover:bg-foreground/30 hover:text-foreground transition-colors relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
						>
							<Icon icon="mdi:file" class="mr-2 h-4 w-4" />
							{navItem.title}
						</a>
					{/each}
				</ul>
				<hr />
				<ul class="overflow-hidden p-1 text-foreground">
					<button
						onclick={() => runCommand(() => setMode('light'))}
						class="w-full hover:bg-foreground/30 hover:text-foreground transition-colors relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
					>
						<Icon class="mr-2 h-4 w-4" icon="mdi:lightbulb-on" />
						Light
					</button>
					<button
						onclick={() => runCommand(() => setMode('dark'))}
						class="w-full hover:bg-foreground/30 hover:text-foreground transition-colors relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
					>
						<Icon class="mr-2 h-4 w-4" icon="mdi:lightbulb-outline" />
						Dark
					</button>
					<button
						onclick={() => runCommand(() => setMode('system'))}
						class="w-full hover:bg-foreground/30 hover:text-foreground transition-colors relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
					>
						<Icon class="mr-2 h-4 w-4" icon="mdi:laptop" />
						System
					</button>
				</ul>
			</section>
		</div>
	</div>
{/if}

<!-- <CommandDialog bind:open>
	<CommandInput placeholder="Pesquise por procedimentos ou condomínios..." />
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
					<Icon class="mr-2 h-4 w-4" icon="mdi:file" />
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
							<Icon class="h-3 w-3" icon="mdi:circle-outline" />
						</div>
						{navItem.title}
					</CommandItem>
				{/each}
			</CommandGroup>
		{/each}
		<CommandSeparator />
		<CommandGroup heading="Theme">
			<CommandItem value="light" onSelect={() => runCommand(() => setMode('light'))}>
				<Icon class="mr-2 h-4 w-4" icon="mdi:lightbulb-on" />
				Light
			</CommandItem>
			<CommandItem value="dark" onSelect={() => runCommand(() => setMode('dark'))}>
				<Icon class="mr-2 h-4 w-4" icon="mdi:lightbulb-outline" />
				Dark
			</CommandItem>
			<CommandItem value="system" onSelect={() => runCommand(() => resetMode())}>
				<Icon class="mr-2 h-4 w-4" icon="mdi:laptop" />
				System
			</CommandItem>
		</CommandGroup>
	</CommandList>
</CommandDialog> -->
