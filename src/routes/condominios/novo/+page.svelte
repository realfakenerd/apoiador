<script lang="ts">
	import Selectfield from '$lib/components/Selectfield.svelte';
	import Textfield from '$lib/components/Textfield.svelte';
	import {Section, SectionDescription, SectionHeading} from '$lib/components/section';
	import {Card, CardHeader, CardContent, CardTitle} from '$lib/components/ui/card';
	import { Separator } from '$lib/components/ui/separator';

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

<Section>
	<header>
		<SectionDescription>Adicione um novo condomínio para a lista</SectionDescription>
		<SectionHeading>Novo Condomínio</SectionHeading>
	</header>
	<form class="flex flex-col gap-y-6">
		<Card>
			<CardHeader>
				<CardTitle>Dados do condomínio</CardTitle>
			</CardHeader>
			<CardContent class="grid md:grid-cols-4 place-items-center gap-4 w-full">
				<Textfield label="Nome" />
				<Textfield label="Numero de Unidades" id="numUnidades" type="number" />
				<Textfield label="Numero de Funcionários" id="numFuncionarios" type="number" />
				<Textfield label="Telefone" type="tel" />
				<Textfield label="Email" type="email" />
				<Textfield label="CNPJ" id="cnpj" />
				<Textfield label="Administradora Anterior" id="admAnterior" />
			</CardContent>
		</Card>
		<Card>
			<CardHeader>
				<CardTitle>Dados do sindico</CardTitle>
			</CardHeader>
			<CardContent class="flex flex-col gap-4">
				<div class="grid md:grid-cols-4 place-items-center gap-4 w-full">
					<Textfield label="Nome" id="nomeSindico" />
					<Textfield label="CPF" id="cpf" />
					<Textfield label="telefone" type="tel" id="telefone" />
					<Textfield label="Email" type="email" id="emailSindico" />
					<Textfield label="Pro Labore" type="number" id="prolabore" />
				</div>
				<Separator class="bg-primary my-4"/>
				<div class="grid md:grid-cols-4 place-items-center gap-4 w-full">
					<Textfield label="CEP" type="text" id="cep" />
					<Selectfield placeholder="Tipo de Logradouro" items={tipoDeLogradouro} />
					<Textfield label="Logradouro" id="logradouroSindico" />
					<Textfield label="Bairro" id="bairroSindico" />
					<Textfield label="Estado" id="estadoSindico" />
					<Textfield label="cidade" id="cidadeSindico" />
					<Textfield label="complemento" id="complementoSindico" />
				</div>
			</CardContent>
		</Card>
	</form>
</Section>
