<script lang="ts">
	import { page } from '$app/stores';
	import { Button } from '$lib/components/ui/button';
	import { Calendar } from '$lib/components/ui/calendar';
	import * as Card from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { crossfade } from 'svelte/transition';
	import * as Popover from '$lib/components/ui/popover';
	import { RadioGroup, RadioGroupItem } from '$lib/components/ui/radio-group';
	import {
		Select,
		SelectContent,
		SelectGroup,
		SelectItem,
		SelectLabel,
		SelectTrigger
	} from '$lib/components/ui/select';
	import { Separator } from '$lib/components/ui/separator';
	import { cn } from '$lib/utils';
	import Icon from '@iconify/svelte';
	import { DateFormatter, getLocalTimeZone, type DateValue } from '@internationalized/date';
	import type { HTMLInputTypeAttribute } from 'svelte/elements';
	import agencias from '../agencias';
	import { cubicInOut } from 'svelte/easing';

	const df = new DateFormatter('en-US', {
		dateStyle: 'long'
	});
	let value: DateValue | undefined = undefined;

	const items = ['condominio', 'contrato', 'sindico'];

	interface CondominioInput {
		id: string;
		placeholder: string;
		label: string;
		type?: HTMLInputTypeAttribute;
	}
	const condominios_input: CondominioInput[] = [
		{
			id: 'conta',
			placeholder: '1234',
			label: 'Conta do condomínio',
			type: 'number'
		},
		{
			id: 'condominio_nome',
			placeholder: 'Solar Carioca',
			label: 'Nome do condomínio'
		},
		{
			id: 'condominio_endereco',
			placeholder: 'Endereço',
			label: 'Endereço'
		},
		{
			id: 'condominio_bairro',
			placeholder: 'Flamengo',
			label: 'Bairro'
		},
		{
			id: 'condominio_cidade',
			placeholder: 'Rio de Janeiro',
			label: 'Cidade'
		},
		{
			id: 'condominio_cep',
			placeholder: '22222-222',
			label: 'CEP'
		},
		{
			id: 'condominio_cnpj',
			placeholder: '11.111.111/1111-11',
			label: 'CNPJ'
		},
		{
			id: 'condominio_unidades',
			placeholder: '10',
			label: 'Unidades'
		},
		{
			id: 'condominio_empregados',
			placeholder: '10',
			label: 'Empregados'
		},
		{
			id: 'condominio_adm_anterior',
			placeholder: 'Crase Sigma',
			label: 'Administrador Anterior'
		},
		{
			id: 'condominio_pagamento_salario',
			placeholder: '05',
			label: 'Dia do pagamento do salário'
		}
	];

	const [send, receive] = crossfade({
		duration: 250,
		easing: cubicInOut
	});
</script>

{#snippet radio_item({value, label, id}: {value: string, label: string, id: string})}
	<div class="flex items-center gap-x-2">
		<RadioGroupItem {value} {id} />
		<Label for={id}>{label}</Label>
	</div>
{/snippet}

{#snippet form_input({id, placeholder, label, type = 'text'}: CondominioInput)}
	<div class="grid w-full items-center gap-3">
		<Label for={id}>{label}</Label>
		<Input {type} {id} {placeholder} />
	</div>
{/snippet}

<section class="p-10 pb-16 flex flex-col gap-6">
	<header class="flex flex-col gap-0.5">
		<h2 class="text-2xl">Comunicação de Entrada de Clientes</h2>
		<p class="text-muted-foreground">
			Preencha os dados abaixo para comunicar a entrada de um novo condomínio
		</p>
	</header>

	<Separator />

	<div class="flex flex-col md:flex-row gap-y-8 md:gap-x-12 md:gap-y-0 relative">
		<aside class="flex flex-col gap-4 text-sm font-semibold w-1/3 py-2 sticky top-24 h-full">
			{#each items as item (item)}
				{@const isActive = item === $page.url.hash.split('#')[1]}
				<Button
					href={`#${item}`}
					variant="ghost"
					class={cn(!isActive && 'hover:underline', 'relative justify-start hover:bg-transparent')}
				>
					{#if isActive}
						<div
							in:send={{ key: 'active-tab' }}
							out:receive={{ key: 'active-tab' }}
							class="absolute inset-0 rounded-md bg-accent"
						></div>
					{/if}

					<span class="relative">Dados do {item}</span>
				</Button>
			{/each}
		</aside>

		<form class="flex flex-col gap-y-6">
			<Card.Root class="w-full">
				<Card.Header>
					<Card.Title id="condominio" tag="h2">Dados do Condomínio</Card.Title>
				</Card.Header>

				<Card.Content class="flex flex-col gap-6">
					<Select>
						<SelectTrigger class="w-full">Selectione uma agência</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectLabel>Agencia</SelectLabel>
								{#each agencias as { value, label } (value)}
									<SelectItem class="w-full" {value} {label}>{label}</SelectItem>
								{/each}
							</SelectGroup>
						</SelectContent>
					</Select>
					<RadioGroup class="md:col-span-3 grid w-full items-center gap-3" value="pool">
						<h2 class="text-sm font-medium leading-none">Tipo de conta</h2>

						<div class="inline-flex items-center gap-4 h-9 py-1">
							{@render radio_item({ value: 'pool', label: 'Pool', id: 'pool' })}
							{@render radio_item({ value: 'basico', label: 'Basico', id: 'basico' })}
							{@render radio_item({ value: 'propria', label: 'Propria', id: 'propria' })}
						</div>
					</RadioGroup>

					{#each condominios_input.slice(0,4) as { id, placeholder, label, type } (id)}
						{@render form_input({ id, placeholder, label, type })}
					{/each}

					<Select>
						<SelectTrigger class="w-full self-end col-span-1">Selecione o estado</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectLabel>Estado</SelectLabel>
								{#each ['rio de janeiro', 'são paulo'] as estado (estado)}
									<SelectItem class="capitalize w-full" value={estado} label={estado} />
								{/each}
							</SelectGroup>
						</SelectContent>
					</Select>
					<Select>
						<SelectTrigger class="w-full self-end col-span-1">Selecione o tipo</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectLabel>Tipo</SelectLabel>
								{#each ['misto', 'residencial', 'comercial'] as estado (estado)}
									<SelectItem class="capitalize w-full" value={estado} label={estado} />
								{/each}
							</SelectGroup>
						</SelectContent>
					</Select>

					{#each condominios_input.slice(4) as { id, placeholder, label, type } (id)}{@render form_input({
						id,
						placeholder,
						label,
						type
					})}{/each}
					
					<RadioGroup class="grid w-full items-center gap-3" value="nao">
						<h2 class="text-sm font-medium leading-none">Ex-cliente</h2>

						<div class="inline-flex items-center h-9 py-1 gap-4">
							{@render radio_item({ value: 'nao', label: 'Não', id: 'nao' })}
							{@render radio_item({ value: 'sim', label: 'Sim', id: 'sim' })}
						</div>
					</RadioGroup>
				</Card.Content>
			</Card.Root>
			<Card.Root class="w-full">
				<Card.Header>
					<Card.Title id="contrato" tag="h2">Dados do Contrato</Card.Title>
				</Card.Header>
				<Card.Content class="flex flex-col gap-6">
					<Popover.Root openFocus>
						<Popover.Trigger asChild let:builder>
							<div class="flex flex-col gap-1.5 w-full">
								<h1 class="text-sm font-medium leading-none">Inicio do contrato</h1>
								<Button
									variant="outline"
									class={cn(
										'w-full justify-start text-left font-normal',
										!value && 'text-muted-foreground'
									)}
									builders={[builder]}
								>
									<Icon icon="mdi:calendar" class="mr-2 h-4 w-4" />
									{value ? df.format(value.toDate(getLocalTimeZone())) : 'Inicio do contrato'}
								</Button>
							</div>
						</Popover.Trigger>
						<Popover.Content class="w-auto p-0">
							<Calendar bind:value initialFocus />
						</Popover.Content>
					</Popover.Root>
					<div class="grid w-full items-center gap-3">
						<Label for="duracao-contrato">Duração do contrato</Label>
						<Input type="number" id="duracao-contrato" placeholder="12" />
					</div>
					<RadioGroup class="grid w-full items-center gap-3" defaultValue="pacote-fechado">
						<h2 class="text-sm font-medium leading-none">Tipo de contrato</h2>

						<div class="inline-flex gap-4 py-1 h-9">
							<div class="flex items-center gap-x-2">
								<RadioGroupItem value="caonvencional" />
							</div>
							<div class="flex items-center gap-x-2">
								<RadioGroupItem value="pacote-fechado" />
							</div>
						</div>
					</RadioGroup>
					<div class="grid w-full items-center gap-3">
						<Label for="taxa-adm">Taxa de administração</Label>
						<Input type="number" id="taxa-adm" placeholder="350" />
					</div>
					<RadioGroup class="grid  w-full items-center gap-1.5" defaultValue="apsa">
						<h2 class="text-sm font-medium leading-none">Indice Reajuste</h2>

						<div class="inline-flex gap-4 py-1 h-9">
							<div class="flex items-center gap-x-2">
								<RadioGroupItem value="apsa" />
							</div>
							<div class="flex items-center gap-x-2">
								<RadioGroupItem value="ipca" />
							</div>
						</div>
					</RadioGroup>
					<div class="grid w-full items-center gap-3">
						<Label for="bonificacao">Bonificação</Label>
						<Input type="number" id="bonificacao" placeholder="100" />
					</div>
					<div class="grid w-full items-center gap-3">
						<Label for="desconto">Desconto</Label>
						<Input type="number" id="desconto" placeholder="10" />
					</div>
					<div class="grid w-full items-center gap-3">
						<Label for="orcamento">Orçamento</Label>
						<Input type="number" id="orcamento" placeholder="10" />
					</div>
					<div class="grid w-full items-center gap-3">
						<Label for="medio-cota">Valor médio da cota</Label>
						<Input type="number" id="medio-cota" placeholder="400" />
					</div>
					<RadioGroup class="grid  w-full items-center gap-1.5">
						<h2 class="text-sm font-medium leading-none">Roteiro transapsa</h2>

						<div class="inline-flex gap-4 py-1 h-9">
							<div class="flex items-center gap-x-2">
								<RadioGroupItem value="01" />
							</div>
							<div class="flex items-center gap-x-2">
								<RadioGroupItem value="02" />
							</div>
						</div>
					</RadioGroup>
					<div class="grid w-full items-center gap-3">
						<Label for="instrucoe-cobranca">Instruções de cobrança</Label>
						<Input type="text" id="instrucoe-cobranca" placeholder="2% de multa e 1% de juros" />
					</div>
					<Popover.Root openFocus>
						<Popover.Trigger asChild let:builder>
							<div class="flex flex-col gap-1.5 w-full">
								<h1 class="text-sm font-medium leading-none">Data do vencimento da cota</h1>
								<Button
									variant="outline"
									class={cn(
										'w-full justify-start text-left font-normal',
										!value && 'text-muted-foreground'
									)}
									builders={[builder]}
								>
									<Icon icon="mdi:calendar" class="mr-2 h-4 w-4" />
									{value ? df.format(value.toDate(getLocalTimeZone())) : new Date().toDateString()}
								</Button>
							</div>
						</Popover.Trigger>
						<Popover.Content class="w-auto p-0">
							<Calendar bind:value initialFocus />
						</Popover.Content>
					</Popover.Root>
				</Card.Content>
			</Card.Root>
			<Card.Root class="w-full">
				<Card.Header>
					<Card.Title id="sindico" tag="h2">Dados do sindico</Card.Title>
				</Card.Header>
				<Card.Content class="grid sm:grid-cols-2 md:grid-cols-4 place-items-center gap-4">
					<div class="grid w-full items-center gap-3">
						<Label for="nome_sindico">Sindico</Label>
						<Input type="text" id="nome_sindico" placeholder="José Silva Sauro" />
					</div>
				</Card.Content>
			</Card.Root>
		</form>
	</div>
</section>
