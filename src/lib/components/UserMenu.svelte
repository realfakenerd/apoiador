<script lang="ts">
	import Icon from '@iconify/svelte';
	import { resetMode, setMode } from 'mode-watcher';
	import { Button } from './ui/button';
	import {
		DropdownMenu,
		DropdownMenuContent,
		DropdownMenuItem,
		DropdownMenuTrigger
	} from './nav/dropdown';
	import type { Session } from '@supabase/supabase-js';

	let { session }: { session?: Session | null } = $props();
</script>

<DropdownMenu>
	<DropdownMenuTrigger>
		<Button variant="ghost" class="w-9 px-0 rounded-full">
			<Icon class="h-[1.2rem] w-[1.2rem]" icon="mdi:user" />
			<span class="sr-only">Toggle theme</span>
		</Button>
	</DropdownMenuTrigger>
	<DropdownMenuContent class="max-w-32">
		{#if !session}
			<DropdownMenuItem class="inline-flex justify-between w-full" href="/auth">
				<span>Login</span>
				<Icon class="h-[1.2rem] w-[1.2rem]" icon="mdi:login-variant" />
			</DropdownMenuItem>
		{:else}
			<DropdownMenuItem class="inline-flex justify-between w-full">
				<span>Logout</span>
				<Icon class="h-[1.2rem] w-[1.2rem]" icon="mdi:logout-variant" />
			</DropdownMenuItem>
		{/if}
	</DropdownMenuContent>
</DropdownMenu>
