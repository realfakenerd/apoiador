<script lang="ts">
	import Selectfield from '$lib/components/Selectfield.svelte';
	import Textfield from '$lib/components/Textfield.svelte';
	import * as Section from '$lib/components/section';
	import * as Card from '$lib/components/ui/card';

	const tipoDeLogradouro = [
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
</script>

<Section.Root>
	<header>
		<Section.Description>Adicione um novo condomínio para a lista</Section.Description>
		<Section.Heading>Novo Condomínio</Section.Heading>
	</header>
	<form class="flex flex-col gap-y-6">
		<Card.Root>
			<Card.Header>
				<Card.Title>Dados do condomínio</Card.Title>
			</Card.Header>
			<Card.Content class="grid md:grid-cols-4 place-items-center gap-4 w-full">
				<Textfield label="Nome" />
				<Textfield label="Numero de Unidades" id="numUnidades" type="number" />
				<Textfield label="Numero de Funcionários" id="numFuncionarios" type="number" />
				<Textfield label="Telefone" type="tel" />
				<Textfield label="Email" type="email" />
				<Textfield label="CNPJ" id="cnpj" />
				<Textfield label="Administradora Anterior" id="admAnterior" />
			</Card.Content>
		</Card.Root>
		<Card.Root>
			<Card.Header>
				<Card.Title>Dados do sindico</Card.Title>
			</Card.Header>
			<Card.Content class="flex flex-col gap-4">
				<div class="grid md:grid-cols-4 place-items-center gap-4 w-full">
					<Textfield label="Nome" id="nomeSindico" />
					<Textfield label="CPF" id="cpf" />
					<Textfield label="telefone" type="tel" id="telefone" />
					<Textfield label="Email" type="email" id="emailSindico" />
					<Textfield label="Pro Labore" type="number" id="prolabore" />
				</div>
				<hr class="border border-primary my-4" />
				<div class="grid md:grid-cols-4 place-items-center gap-4 w-full">
					<Textfield label="CEP" type="text" id="cep" />
					<Selectfield placeholder="Tipo de Logradouro" items={tipoDeLogradouro} />
					<Textfield label="Logradouro" id="logradouroSindico" />
					<Textfield label="Bairro" id="bairroSindico" />
					<Textfield label="Estado" id="estadoSindico" />
					<Textfield label="cidade" id="cidadeSindico" />
					<Textfield label="complemento" id="complementoSindico" />
				</div>
			</Card.Content>
		</Card.Root>
	</form>
</Section.Root>
