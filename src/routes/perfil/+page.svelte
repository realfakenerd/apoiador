<script lang="ts">
	import Radiofield from '$lib/components/Radiofield.svelte';
	import Textfield from '$lib/components/Textfield.svelte';
	import Section from '$lib/components/section/Section.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { read, utils, writeFile } from 'xlsx';
	let files = $state<FileList>();
	// let pre = $state<Excel[]>([]);

	interface Excel {
		AC: string;
		CONDOMÍNIO: string;
		Bairro: string;
		ENDEREÇO: string;
	}

	async function readXLSX() {
		const file = files?.item(0);
		if (file) {
			const fileArrayBuffer = await file.arrayBuffer();
			const xlsx = read(fileArrayBuffer);
			console.log(utils.sheet_to_formulae(xlsx.Sheets[xlsx.SheetNames[0]]));
		}
	}

	function createXLSX() {
		const ws = utils.json_to_sheet([
			{ Name: 'Bill Clinton', Index: 42 },
			{ Name: 'GeorgeW Bush', Index: 43 },
			{ Name: 'Barack Obama', Index: 44 },
			{ Name: 'Donald Trump', Index: 45 },
			{ Name: 'Joseph Biden', Index: 46 }
		]);
		const wb = utils.book_new();
		utils.book_append_sheet(wb, ws, 'Sheet1');
		writeFile(wb, 'test.xlsx');
		console.log(wb);
	}

	$effect(() => {
		readXLSX();
	});
</script>

<input type="file" bind:files />
<button onclick={createXLSX}>create</button>
<Section>
	<Card>
		<CardHeader>
			<CardTitle>Alguma coisa</CardTitle>
		</CardHeader>
		<CardContent>
			<Textfield label="Agência" />
			<Textfield label="Conta" />
			<Radiofield
				label="Tipo de conta"
				value="pool"
				items={[
					{ value: 'pool', label: 'Conta POOL', id: 'pool' },
					{ value: 'propria', label: 'Conta PRÓPRIA', id: 'propria' }
				]}
			/>
			<Textfield label="Consultor do condomínio" />
			<Textfield label="Captador" />
			<Radiofield
				label="Tipo de captação"
				value="ativa"
				items={[
					{ value: 'ativa', label: 'ativa' },
					{ value: 'receptiva', label: 'receptiva' }
				]}
			/>
			<Textfield label="Cliente Potencial" />
			<Textfield label="Negociação" />
			<Textfield label="Proposta" />
		</CardContent>
	</Card>

	<Card>
		<CardHeader>
			<CardTitle>Dados do condomínio</CardTitle>
		</CardHeader>
		<CardContent>
			<Textfield label="Nome do condomínio" />
			<Radiofield
				label="Ex-cliente"
				value="nao"
				items={[
					{ value: 'sim', label: 'sim' },
					{ value: 'nao', label: 'não' }
				]}
			/>
			<Textfield label="Endereço" />
			<Textfield label="Numero" />
			<Textfield label="Complemento" />
			<Textfield label="Bairro" />
			<Textfield label="Município" />
			<Textfield label="CEP" />
			<Textfield label="UF" />
			<Textfield label="CNPJ" />
			<Radiofield
				label="Característica"
				value="edificio"
				items={[
					{ value: 'edificio', label: 'edifício' },
					{ value: 'casas', label: 'Casas/Terreno' },
					{ value: 'lojas', label: 'Lojas' }
				]}
			/>
			<Radiofield
				label="Tipo"
				value="residencial"
				items={[
					{ value: 'residencial', label: 'residencial' },
					{ value: 'comercial', label: 'comercial' },
					{ value: 'misto', label: 'misto' }
				]}
			/>
			<Textfield label="Unidades" />
			<Textfield label="blocos" />
			<Textfield label="elevadores" />
			<Textfield label="empregados" />
		</CardContent>
	</Card>

	<Card>
		<CardHeader>
			<CardTitle>Documentos entregues</CardTitle>
		</CardHeader>
		<CardContent>sss</CardContent>
	</Card>

	<Button>Criar Reclin</Button>
</Section>
