<script lang="ts">
	import Radiofield from '$lib/components/Radiofield.svelte';
	import Textfield from '$lib/components/Textfield.svelte';
	import Section from '$lib/components/section/Section.svelte';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { read, utils } from 'xlsx';
	let files = $state<FileList>();
	let pre = $state<Excel[]>([]);

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
			pre = utils.sheet_to_json<Excel>(xlsx.Sheets[xlsx.SheetNames[0]]);

			console.log(pre[0]);
		}
	}

	$effect(() => {
		readXLSX();
	});
</script>

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
		<CardContent>
			sss
		</CardContent>
	</Card>
</Section>
