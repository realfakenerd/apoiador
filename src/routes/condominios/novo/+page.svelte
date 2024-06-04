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

	let condominio = $state({
		nome: '',
		numUnidades: '',
		numFuncionarios: '',
		telefone: '',
		email: '',
		cnpj: '',
		admAnterior: ''
	});
	let sindico = $state({
		nome: '',
		cpf: '',
		telefone: '',
		email: '',
		prolabore: ''
	});

	let sindicoEndereco = $state({
		tipoDeLogradouro: 'Selecione...',
		cep: '',
		logradouro: '',
		bairro: '',
		estado: '',
		cidade: '',
		complemento: ''
	});

	async function onsubmit(e: Event) {
		e.preventDefault();
		console.log(condominio);
	}

	const items = ['condominio', 'contrato', 'sindico'];
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
		<form class="flex flex-col gap-y-6 w-full" {onsubmit}>
			<Card class="@container">
				<CardHeader>
					<CardTitle>Dados do condomínio</CardTitle>
				</CardHeader>
				<CardContent class="grid @md:grid-cols-2 gap-4 w-full">
					<Textfield bind:value={condominio.nome} label="Nome" />
					<Textfield
						required
						maxlength={3}
						bind:value={condominio.numUnidades}
						label="Numero de Unidades"
						id="numUnidades"
						type="number"
					/>
					<Textfield
						bind:value={condominio.numFuncionarios}
						label="Numero de Funcionários"
						id="numFuncionarios"
						type="number"
					/>
					<Textfield bind:value={condominio.telefone} label="Telefone" type="tel" />
					<Textfield bind:value={condominio.email} label="Email" type="email" />
					<Textfield bind:value={condominio.cnpj} label="CNPJ" id="cnpj" />
					<Textfield
						bind:value={condominio.admAnterior}
						label="Administradora Anterior"
						id="admAnterior"
					/>
				</CardContent>
			</Card>
			<Card>
				<CardHeader>
					<CardTitle>Dados do sindico</CardTitle>
				</CardHeader>
				<CardContent class="@container flex flex-col gap-4 w-full">
					<div id="sindico" class="grid @md:grid-cols-2 gap-4 w-full">
						<Textfield bind:value={sindico.nome} label="Nome" id="nomeSindico" />
						<Textfield bind:value={sindico.cpf} label="CPF" id="cpf" />
						<Textfield bind:value={sindico.telefone} label="telefone" type="tel" id="telefone" />
						<Textfield bind:value={sindico.email} label="Email" type="email" id="emailSindico" />
						<Textfield
							bind:value={sindico.prolabore}
							label="Pro Labore"
							type="number"
							id="prolabore"
						/>
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
								class="relative py-2 px-3 min-w-[8rem] rounded-md border bg-popover text-popover-foreground shadow-md focus:outline-none"
								id="selectLogradouro"
								bind:value={sindicoEndereco.tipoDeLogradouro}
							>
								{#each tipoDeLogradouro as item (item)}
									<option class="py-1.5 pl-2 pr-8" value={item}>
										{item}
									</option>
								{/each}
							</select>
						</section>
						<!-- <Select bind:value={sindicoEndereco.tipoDeLogradouro}>
							<SelectLabel for="selectLogradouro">Tipo de Logradouro</SelectLabel>
							<SelectTrigger>Selecione...</SelectTrigger>
							<SelectContent>
								{#each tipoDeLogradouro as item (item)}
									<SelectItem value={item} label={item}/>
								{/each}
							</SelectContent>
						</Select> -->
						<Textfield bind:value={sindicoEndereco.cep} label="CEP" type="text" id="cep" />
						<Textfield
							bind:value={sindicoEndereco.logradouro}
							label="Logradouro"
							id="logradouroSindico"
						/>
						<Textfield bind:value={sindicoEndereco.bairro} label="Bairro" id="bairroSindico" />
						<Textfield bind:value={sindicoEndereco.estado} label="Estado" id="estadoSindico" />
						<Textfield bind:value={sindicoEndereco.cidade} label="cidade" id="cidadeSindico" />
						<Textfield
							bind:value={sindicoEndereco.complemento}
							label="complemento"
							id="complementoSindico"
						/>
					</div>
				</CardContent>
			</Card>
			<button class={cn(buttonVariants({ variant: 'default' }))} type="submit">Enviar</button>
		</form>
	</section>
</section>
