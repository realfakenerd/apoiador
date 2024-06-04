<script>
	import Textfield from '$lib/components/Textfield.svelte';
	import { buttonVariants, cn } from '$lib/utils';
	import Icon from '@iconify/svelte';
</script>

<section
	class="relative min-h-dvh flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0"
>
	<a href="/" class="absolute right-4 top-4 md:right-8 md:top-8"> Login </a>
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
	<div class="bg-background h-full grid place-items-center">
		<div class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
			<div class="flex flex-col space-y-2 text-center">
				<h1 class="text-2xl font-semibold tracking-tight">Crie sua conta</h1>
			</div>
			<form class="flex gap-4 flex-col" method="post" action="?/login">
				<Textfield label="E-mail" name="email" type="email" />
				<Textfield label="Senha" name="senha" type="password" />
				<button class={cn('flex gap-4', buttonVariants({ variant: 'secondary' }))}>
					<span class="text-md">Login com e-mail</span>
					<Icon icon="mdi:email" />
				</button>
			</form>
		</div>
	</div>
</section>
