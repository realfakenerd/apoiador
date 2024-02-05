<script lang="ts">
	import Section from '$lib/components/section/Section.svelte';
	import {
		Table,
		TableBody,
		TableCaption,
		TableCell,
		TableHead,
		TableHeader,
		TableRow
	} from '$lib/components/ui/table';
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
	<input type="file" id="Excel" bind:files />

	<Table>
		<TableCaption>Uma lista de etiquetas.</TableCaption>
		<TableHeader>
			<TableRow>
				<TableHead>Condomínio</TableHead>
				<TableHead>Endereço</TableHead>
				<TableHead>Bairro</TableHead>
				<TableHead class="text-right">A/C</TableHead>
			</TableRow>
		</TableHeader>
		<TableBody>
			{#each pre as p}
				<TableRow>
					<TableCell class="w-fit">{p.CONDOMÍNIO}</TableCell>
					<TableCell>{p.ENDEREÇO}</TableCell>
					<TableCell>{p.Bairro}</TableCell>
					<TableCell>{p.AC}</TableCell>
				</TableRow>
			{/each}
		</TableBody>
	</Table>
</Section>
