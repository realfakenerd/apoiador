<script lang="ts">
	import Icon from '@iconify/svelte';
	import type { User } from '@supabase/supabase-js';
	import {
		DropdownMenu,
		DropdownMenuContent,
		DropdownMenuItem,
		DropdownMenuTrigger
	} from './nav/dropdown';
	import { Button } from './ui/button';

	let user: boolean = $state(false);
</script>

<DropdownMenu>
	<DropdownMenuTrigger>
		<Button variant="ghost" class="w-9 px-0 rounded-full">
			<Icon class="h-[1.2rem] w-[1.2rem]" icon="mdi:user" />
			<span class="sr-only">Toggle theme</span>
		</Button>
	</DropdownMenuTrigger>
	<DropdownMenuContent class="max-w-32">
		{#if !user}
			<DropdownMenuItem class="inline-flex justify-between w-full" href="/auth">
				<span>Login</span>
				<Icon class="h-[1.2rem] w-[1.2rem]" icon="mdi:login-variant" />
			</DropdownMenuItem>
		{:else}
			<DropdownMenuItem href="/perfil" class="inline-flex justify-between w-full">
				<span>Perfil</span>
			</DropdownMenuItem>
			<DropdownMenuItem class="inline-flex justify-between w-full">
				<span>Logout</span>
				<Icon class="h-[1.2rem] w-[1.2rem]" icon="mdi:logout-variant" />
			</DropdownMenuItem>
		{/if}
	</DropdownMenuContent>
</DropdownMenu>
