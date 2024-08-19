<script lang="ts">
	import { page } from '$app/stores';
	import Textfield from '$lib/components/Textfield.svelte';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Separator } from '$lib/components/ui/separator';
	import { buttonVariants, cn } from '$lib/utils';

	const tipoDeLogradouro = [
		'Selecione...',
		'Rua',
		'Avenida',
		'Praça',
		'Alameda',
		'Travessa',
		'Estrada',
		'Viela',
		'Rodovia',
		'Largo',
		'Passagem',
		'Beco',
		'Ponte',
		'Vila',
		'Quadra'
	];

	const items = ['condominio', 'contrato', 'sindico'];

	let { form } = $props();

</script>

<section class="p-10 pb-16 flex flex-col gap-6">
	<header class="flex flex-col gap-0.5">
		<h2 class="text-2xl">Novo condomínio</h2>
		<p class="text-muted-foreground">Adicione um novo condomínio para a lista</p>
	</header>
	<Separator />

	<section class="flex flex-col md:flex-row">
		<aside
			class="hidden md:flex flex-col gap-4 text-sm font-semibold w-1/3 py-2 sticky top-24 h-full"
		>
			{#each items as item (item)}
				{@const isActive = item === $page.url.hash.split('#')[1]}
				<a
					href={`#${item}`}
					class={cn(
						buttonVariants({
							variant: 'ghost',
							size: 'default'
						}),
						!isActive && 'hover:underline',
						'relative justify-start hover:bg-transparent'
					)}
				>
					{#if isActive}
						<div class="absolute inset-0 rounded-md bg-accent"></div>
					{/if}

					<span class="relative">Dados do {item}</span>
				</a>
			{/each}
		</aside>
		<form class="flex flex-col gap-y-6 w-full" method="post">
			<Card class="@container">
				<CardHeader>
					<CardTitle>Dados do condomínio</CardTitle>
				</CardHeader>
				<CardContent class="grid @md:grid-cols-2 gap-4 w-full">
					<Textfield name="nome" label="Nome" type="text" />
					<Textfield
						name="unidades"
						maxlength={3}
						label="Numero de Unidades"
						id="numUnidades"
						type="number"
					/>
					<Textfield
						name="funcionarios"
						label="Numero de Funcionários"
						id="numFuncionarios"
						type="number"
					/>
					<Textfield name="telefone" label="Telefone" type="tel" />
					<Textfield name="email" label="Email" type="email" />
					<Textfield name="cnpj" label="CNPJ" id="cnpj" />
					<Textfield
						name="adm_atual"
						label="Administradora Atual"
						id="admAtual"
					/>
				</CardContent>
			</Card>
			<Card>
				<CardHeader>
					<CardTitle>Dados do sindico</CardTitle>
				</CardHeader>
				<CardContent class="@container flex flex-col gap-4 w-full">
					<div id="sindico" class="grid @md:grid-cols-2 gap-4 w-full">
						<Textfield name="sindico:nome" label="Nome" id="nomeSindico" />
						<Textfield name="sindico:cpf" label="CPF" id="cpf" />
						<Textfield name="sindico:telefone" label="telefone" type="tel" id="telefone" />
						<Textfield name="sindico:email" label="Email" type="email" id="emailSindico" />
						<Textfield name="sindico:prolabore" label="Pro Labore" type="number" id="prolabore" />
					</div>
					<Separator class="bg-primary my-4" />
					<div class="grid @md:grid-cols-2 gap-4 w-full">
						<section class="flex flex-col gap-4">
							<label
								class="capitalize text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
								for="selectLogradouro"
							>
								Tipo de Logradouro
							</label>
							<select
								name="endereco:tipo_logradouro"
								class="relative py-2 px-3 min-w-[8rem] rounded-md border bg-popover text-popover-foreground shadow-md focus:outline-none"
								id="selectLogradouro"
							>
								{#each tipoDeLogradouro as item (item)}
									<option class="py-1.5 pl-2 pr-8" value={item}>
										{item}
									</option>
								{/each}
							</select>
						</section>

						<Textfield name="endereco:cep" label="CEP" type="text" id="cep" />
						<Textfield name="endereco:numero" label="Numero" type="text" id="number" />
						<Textfield name="endereco:logradouro" label="Logradouro" id="logradouroSindico" />
						<Textfield name="endereco:bairro" label="Bairro" id="bairroSindico" />
						<Textfield name="endereco:estado" label="Estado" id="estadoSindico" />
						<Textfield name="endereco:cidade" label="cidade" id="cidadeSindico" />
						<Textfield name="endereco:complemento" label="complemento" id="complementoSindico" />
					</div>
				</CardContent>
			</Card>
			<button class={cn(buttonVariants({ variant: 'default' }))} type="submit">Enviar</button>
		</form>
	</section>
</section>
