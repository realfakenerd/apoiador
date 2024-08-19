<script lang="ts">
	import { cn } from '$lib/utils';
	import Icon from '@iconify/svelte';
	import { createDropdownMenu, melt } from '@melt-ui/svelte';
	import { resetMode, setMode } from 'mode-watcher';

	const {
		elements: { trigger, menu, item },
		states: { open }
	} = createDropdownMenu();
</script>

<button use:melt={$trigger} class="relative transition-colors hover:text-foreground/80 w-9 px-0">
	<Icon
		class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
		icon="mdi:lightbulb-on"
	/>
	<Icon
		class="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
		icon="mdi:lightbulb-outline"
	/>
</button>

{#if $open}
	<div
		use:melt={$menu}
		class="menu-content"
	>
		<button
			class="menu-item"
			use:melt={$item}
			onclick={() => setMode('light')}
		>
			<span>Light</span>
			<Icon class="h-[1.2rem] w-[1.2rem]" icon="mdi:lightbulb-on" />
		</button>
		<button
			class="menu-item"
			use:melt={$item}
			onclick={() => setMode('dark')}
		>
			<span>Dark</span>
			<Icon class="h-[1.2rem] w-[1.2rem]" icon="mdi:lightbulb-outline" />
		</button>
		<button
			class="menu-item"
			use:melt={$item}
			onclick={() => resetMode()}
		>
			<span>System</span>
			<Icon class="h-[1.2rem] w-[1.2rem]" icon="mdi:laptop" />
		</button>
	</div>
{/if}

<style>
	.menu-content {
		display: ;

		/* 'flex flex-col gap-1',
			'transition-shadow shadow-lg shadow-background/30 z-50 min-w-[8rem] rounded-md bg-popover overflow-hidden text-popover-foreground',
			'hover:ring-2 ring-primary',
			'max-w-32' */
	}

	.menu-item {
		display: inline-flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		position: relative;
		transition: colors 150ms ease;
		padding: theme('size.2') theme('size.3');

		@apply text-sm;


		&:hover {
			background-color: theme('colors.accent.DEFAULT' / .5);
			color: theme('colors.accent.foreground');
		}

		/* 
			'inline-flex justify-between w-full',
				'relative flex cursor-default transition-colors items-center px-3 py-2 text-sm',
				'focus:bg-accent/50 focus:text-accent-foreground',
				'hover:bg-accent/50 hover:text-accent-foreground'
		*/
	}
</style>
