<script lang="ts">
	import Icon from '@iconify/svelte';
	import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

	import { auth } from '$lib/firebase/index';
	import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';
	import {DropdownMenu, DropdownMenuTrigger, DropdownMenuContent,DropdownMenuGroup, DropdownMenuSeparator, DropdownMenuLabel, DropdownMenuItem} from '../ui/dropdown-menu';
	import { userStore } from '$lib/firebase/store/auth.svelte';

	const { user } = userStore(auth);

</script>

<DropdownMenu>
	<DropdownMenuTrigger>
		<Avatar>
			<AvatarImage src={user?.photoURL} alt="user profile photo" />
			<AvatarFallback>
				{#if user}
					{user.displayName?.split('')[0]}
				{:else}
					<Icon icon="mdi:person" />
				{/if}
			</AvatarFallback>
		</Avatar>
	</DropdownMenuTrigger>

	<DropdownMenuContent>
		<DropdownMenuGroup class="flex flex-col gap-2">
			<DropdownMenuLabel class="self-center pb-0">Minha Conta</DropdownMenuLabel>
			<DropdownMenuSeparator />
			{#if user}
				<a href="/perfil">
					<DropdownMenuItem class="gap-x-4">
						<Icon icon="mdi:account-circle" />
						Perfil
					</DropdownMenuItem>
				</a>

				<DropdownMenuItem
					class="justify-center bg-destructive hover:bg-destructive/60"
					onclick={() => signOut(auth)}>Sair</DropdownMenuItem
				>
			{:else}
				<DropdownMenuItem
					class="cursor-pointer inline-flex gap-x-3"
					on:click={() => signInWithPopup(auth, new GoogleAuthProvider())}
				>
					<span>Entrar com</span>
					<Icon icon="logos:google-icon" />
				</DropdownMenuItem>
				<DropdownMenuItem
					class="cursor-pointer inline-flex gap-x-3"
					on:click={() => signInWithPopup(auth, new GoogleAuthProvider())}
				>
					<span>Entrar com</span>
					<Icon icon="logos:microsoft-icon" />
				</DropdownMenuItem>
			{/if}
		</DropdownMenuGroup>
	</DropdownMenuContent>
</DropdownMenu>
