<script lang="ts">
	import Icon from '@iconify/svelte';
	import FormControl from './FormControl.svelte';

	let nomeVal = '';
	async function enviar(e: Event) {
		// const id = await db.condominio.add({
		// 	nome:
		// })

		console.log(nomeVal);
	}

	let dialog: HTMLDialogElement;
</script>

<button class="btn btn-circle absolute bottom-24 right-4" on:click={() => dialog.showModal()}>
	<Icon icon="mdi:plus" />
</button>
<dialog bind:this={dialog} class="modal">
	<section class="modal-box">
		<form method="dialog">
			<button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
				<Icon icon="mdi:close-thick" />
			</button>
		</form>
		<FormControl on:input={() => console.log(nomeVal)} label="Nome do Condomínio" value={nomeVal} />

		<div class="modal-action">
			<button on:click={enviar} class="btn btn-outline">enviar</button>
		</div>
	</section>
</dialog>
