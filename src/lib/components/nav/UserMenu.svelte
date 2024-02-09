<script lang="ts">
	import Icon from '@iconify/svelte';
	import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

	import { auth } from '$lib/firebase/index';
	import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';
	import * as DropdownMenu from '../ui/dropdown-menu';
	import { userStore } from '$lib/firebase/store/auth.svelte';

	const { user } = userStore(auth);

</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger>
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
	</DropdownMenu.Trigger>

	<DropdownMenu.Content>
		<DropdownMenu.Group class="flex flex-col gap-2">
			<DropdownMenu.Label class="self-center pb-0">Minha Conta</DropdownMenu.Label>
			<DropdownMenu.Separator />
			{#if user}
				<a href="/perfil">
					<DropdownMenu.Item class="gap-x-4">
						<Icon icon="mdi:account-circle" />
						Perfil
					</DropdownMenu.Item>
				</a>

				<DropdownMenu.Item
					class="justify-center bg-destructive hover:bg-destructive/60"
					onclick={() => signOut(auth)}>Sair</DropdownMenu.Item
				>
			{:else}
				<DropdownMenu.Item
					class="cursor-pointer inline-flex gap-x-3"
					on:click={() => signInWithPopup(auth, new GoogleAuthProvider())}
				>
					<span>Entrar com</span>
					<Icon icon="logos:google-icon" />
				</DropdownMenu.Item>
				<DropdownMenu.Item
					class="cursor-pointer inline-flex gap-x-3"
					on:click={() => signInWithPopup(auth, new GoogleAuthProvider())}
				>
					<span>Entrar com</span>
					<Icon icon="logos:microsoft-icon" />
				</DropdownMenu.Item>
			{/if}
		</DropdownMenu.Group>
	</DropdownMenu.Content>
</DropdownMenu.Root>
