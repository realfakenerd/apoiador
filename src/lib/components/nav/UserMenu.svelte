<script lang="ts">
	import { user } from '$lib/firebase';
	import Icon from '@iconify/svelte';
	import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
	import { SignedIn, SignedOut } from 'sveltefire';
	import * as Avatar from '../ui/avatar';
	import * as DropdownMenu from '../ui/dropdown-menu';
</script>

<DropdownMenu.Root>
	<SignedOut let:auth>
		<DropdownMenu.Trigger>
			<Avatar.Root>
				<Avatar.Fallback><Icon icon="mdi:person" /></Avatar.Fallback>
			</Avatar.Root>
		</DropdownMenu.Trigger>
		<DropdownMenu.Content>
			<DropdownMenu.Group class="flex flex-col gap-2">
				<DropdownMenu.Label class="self-center pb-0">Minha Conta</DropdownMenu.Label>
				<DropdownMenu.Separator />
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
			</DropdownMenu.Group>
		</DropdownMenu.Content>
	</SignedOut>
	<SignedIn let:user let:signOut>
		<DropdownMenu.Trigger>
			<Avatar.Root>
				<Avatar.Image src={user?.photoURL} alt="user profile photo" />
				<Avatar.Fallback>{user.displayName?.split('')[0]}</Avatar.Fallback>
			</Avatar.Root>
		</DropdownMenu.Trigger>
		<DropdownMenu.Content>
			<DropdownMenu.Group class="flex flex-col gap-2">
				<DropdownMenu.Label class="self-center pb-0">Minha Conta</DropdownMenu.Label>
				<DropdownMenu.Separator />
				<a href="/perfil">
					<DropdownMenu.Item class="gap-x-4">
						<Icon icon="mdi:account-circle" />
						Perfil
					</DropdownMenu.Item>
				</a>

				<DropdownMenu.Item
					class="justify-center bg-destructive hover:bg-destructive/60"
					on:click={signOut}>Sair</DropdownMenu.Item
				>
			</DropdownMenu.Group>
		</DropdownMenu.Content>
	</SignedIn>
</DropdownMenu.Root>
