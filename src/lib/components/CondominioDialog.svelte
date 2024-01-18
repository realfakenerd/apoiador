<script lang="ts">
	import { Button, buttonVariants } from '$lib/components/ui/button';
	import * as Dialog from '$lib/components/ui/dialog';
	import Icon from '@iconify/svelte';
	import Textfield from './Textfield.svelte';
</script>

<Dialog.Root>
	<Dialog.Trigger class={buttonVariants({ variant: 'default', class: 'flex gap-2' })}>
		<Icon icon="mdi:plus" /> Condomínio
	</Dialog.Trigger>
	<Dialog.Content class="md:min-w-max w-full">
		<Dialog.Header>
			<Dialog.Title>Novo Condomínio</Dialog.Title>
			<Dialog.Description>
				Inclua um novo condomínio na lista
			</Dialog.Description>
		</Dialog.Header>
		<div class="grid md:grid-cols-4 gap-4 py-4">
			<Textfield label="Nome"/>
			<Textfield label="Numero de Unidades" id="numUnidades"/>
			<Textfield label="Numero de Funcionários" id="numFuncionarios"/>
			<Textfield label="Telefone"/>
			<Textfield label="Email"/>
			<Textfield label="cnpj"/>
			<Textfield label="Administradora Anterior" id="admAnterior"/>
		</div>
		<Dialog.Footer>
			<Button type="submit">Save changes</Button>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
