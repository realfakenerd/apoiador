<script>
	import Textfield from '$lib/components/Textfield.svelte';
	import { buttonVariants, cn } from '$lib/utils';
	import Icon from '@iconify/svelte';

	let { form } = $props();

	console.log(form);
</script>

<section
	class="bg-background relative min-h-dvh flex-col items-center justify-center grid lg:grid-cols-2 lg:px-0 w-full"
>
	<div
		class="relative hidden h-full flex-col justify-between text-foreground p-10 dark:border-r border-border lg:flex"
	>
		<img class="absolute inset-0 w-full h-full object-cover" src="/predios.jpg" alt="predios" />
		<header class="relative z-20 text-lg font-medium">APSA</header>
		<div class="relative z-20">
			<blockquote class="space-y-2">
				<p class="text-lg">
					&ldquo;A APSA é garantia de tranquilidade há mais de 90 anos e entende suas necessidades,
					buscando soluções para o seu imóvel ou condomínio de forma presencial ou digital. Conheça
					nossos serviços!&rdquo;
				</p>
			</blockquote>
		</div>
	</div>
	<div class="h-full w-full grid place-items-center">
		<div class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
			<div class="flex flex-col space-y-2 text-center">
				<h1 class="text-2xl font-semibold tracking-tight">Crie sua conta</h1>
			</div>
			<form class="flex gap-4 flex-col" method="post">
				<Textfield label="E-mail" name="email" type="email" />
				<Textfield
					label="Senha"
					name="senha"
					autocomplete="new-password"
					minlength={6}
					type="password"
				/>
				<button
					formaction="?/signup"
					class={cn('flex gap-4', buttonVariants({ variant: 'secondary' }))}
				>
					<span class="text-md">Criar conta</span>
					<Icon icon="mdi:email" />
				</button>
				<hr />
				<button
					formaction="?/login"
					class={cn('flex gap-4', buttonVariants({ variant: 'secondary' }))}
				>
					<span class="text-md">Login com e-mail</span>
					<Icon icon="mdi:email" />
				</button>
				<button
					formaction="?/provider_login"
					class={cn('flex gap-4', buttonVariants({ variant: 'secondary' }))}
				>
					<span class="text-md">Login com google</span>
					<Icon icon="mdi:email" />
				</button>
			</form>
		</div>
	</div>
</section>
