<script lang="ts">
	import TextInput from '$lib/components/TextInput.svelte';
	import { db } from '$lib/db';
	import type { HTMLInputAttributes } from 'svelte/elements';

	interface Input {
		type: HTMLInputAttributes['type'];
		label: string;
		value: any;
	}

	let nomeVal = '';
	let endVal = '';
	let bairVal = '';
	const inputs: Input[] = [
		{
			type: 'text',
			label: 'Nome',
			value: nomeVal
		},
		{
			type: 'text',
			label: 'Endereço',
			value: endVal
		},
		{
			type: 'text',
			label: 'Bairro',
			value: bairVal
		}
	];

	async function enviar() {
		// const id = await db.condominio.add({
		// 	nome:
		// })

		console.log(nomeVal);
	}
</script>

<h1 class="text-display-large">Condomínios</h1>

<form class="card">
	<section class="card-body">
		{#each inputs as { value, label }}
			<label class="form-control w-full max-w-xs">
				<div class="label">
					<span class="text-label-large">{label}</span>
				</div>
				<input type="text" bind:value class="input input-bordered w-full max-w-xs" />
				<div class="label">
					<span class="text-label-small">s {value}</span>
				</div>
			</label>
		{/each}

		<button on:click|preventDefault={enviar} class="btn btn-outline">enviar</button>
	</section>
</form>
