<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Calendar } from '$lib/components/ui/calendar';
	import * as Card from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import * as Popover from '$lib/components/ui/popover';
	import { RadioGroup, RadioGroupItem } from '$lib/components/ui/radio-group';
	import * as Select from '$lib/components/ui/select';
	import { cn } from '$lib/utils';
	import Icon from '@iconify/svelte';
	import { DateFormatter, getLocalTimeZone, type DateValue } from '@internationalized/date';
	import agencias from '../agencias';
	import {Section, SectionHeading, SectionTitle} from '$lib/components/section';

	const df = new DateFormatter('en-US', {
		dateStyle: 'long'
	});
	let value: DateValue | undefined = undefined;
</script>

<Section>
	<SectionHeading>
		<SectionTitle>Comunicação de Entrada de Clientes</SectionTitle>
	</SectionHeading>
	<form class="flex flex-col gap-y-6">
		<Card.Root class="w-full">
			<Card.Header>
				<Card.Title tag="h2">Dados do Condomínio</Card.Title>
			</Card.Header>

			<Card.Content class="grid sm:grid-cols-2 md:grid-cols-4 place-items-center gap-4">
				<Select.Root>
					<Select.Trigger class="w-full">
						<Select.Value placeholder="Selecione a âgencia" />
					</Select.Trigger>
					<Select.Content>
						<Select.Group>
							<Select.Label>Agencia</Select.Label>
							{#each agencias as { value, label } (value)}
								<Select.Item class="w-full" {value} {label}>{label}</Select.Item>
							{/each}
						</Select.Group>
					</Select.Content>
					<Select.Input name="agencia-escolhida" />
				</Select.Root>
				<RadioGroup class="md:col-span-3 grid w-full items-center gap-1.5" defaultValue="pool">
					<h2 class="text-sm font-medium leading-none">Tipo de conta</h2>

					<div class="inline-flex items-center gap-4 h-9 py-1">
						<div class="flex items-center gap-x-2">
							<RadioGroupItem value="pool" />
						</div>
						<div class="flex items-center gap-x-2">
							<RadioGroupItem value="basico" />
						</div>
						<div class="flex items-center gap-x-2">
							<RadioGroupItem value="propria" />
						</div>
					</div>
				</RadioGroup>

				<div class="grid w-full items-center gap-1.5">
					<Label for="conta">Conta</Label>
					<Input type="number" id="conta" placeholder="1234" />
				</div>
				<div class="grid w-full items-center gap-1.5">
					<Label for="condominio">Condomínio</Label>
					<Input type="text" id="condominio" placeholder="Solar Carioca" />
				</div>
				<div class="grid w-full items-center gap-1.5">
					<Label for="endereco">Endereço</Label>
					<Input type="text" id="endereco" placeholder="Rua 2, 42" />
				</div>
				<div class="grid w-full items-center gap-1.5">
					<Label for="bairro">Bairro</Label>
					<Input type="text" id="bairro" placeholder="Flamengo" />
				</div>
				<div class="grid w-full items-center gap-1.5">
					<Label for="municipio">Município</Label>
					<Input type="text" id="municipio" placeholder="Flamengo" />
				</div>
				<Select.Root>
					<Select.Trigger class="w-full self-end col-span-1">
						<Select.Value placeholder="Selecione o estado" />
					</Select.Trigger>
					<Select.Content>
						<Select.Group>
							<Select.Label>Estado</Select.Label>
							{#each ['rio-de-janeiro', 'são-paulo'] as estado (estado)}
								<Select.Item class="capitalize w-full" value={estado} label={estado}
									>{estado.split('-').join(' ')}</Select.Item
								>
							{/each}
						</Select.Group>
					</Select.Content>
					<Select.Input name="estado-escolhido" />
				</Select.Root>
				<div class="grid w-full items-center gap-1.5">
					<Label for="cep">CEP</Label>
					<Input type="number" id="cep" placeholder="10200-30" />
				</div>
				<Select.Root>
					<Select.Trigger class="w-full self-end col-span-1">
						<Select.Value placeholder="Selecione o tipo" />
					</Select.Trigger>
					<Select.Content>
						<Select.Group>
							<Select.Label>Tipo</Select.Label>
							{#each ['misto', 'residencial', 'comercial'] as estado (estado)}
								<Select.Item class="capitalize w-full" value={estado} label={estado}
									>{estado.split('-').join(' ')}</Select.Item
								>
							{/each}
						</Select.Group>
					</Select.Content>
					<Select.Input name="estado-escolhido" />
				</Select.Root>
				<div class="grid w-full items-center gap-1.5">
					<Label for="cnpj">CNPJ</Label>
					<Input type="number" id="cnpj" placeholder="102003000001-40" />
				</div>
				<div class="grid w-full items-center gap-1.5">
					<Label for="unidades">Unidades</Label>
					<Input type="number" id="unidades" placeholder="01" />
				</div>
				<div class="grid w-full items-center gap-1.5">
					<Label for="empregados">Empregados</Label>
					<Input type="number" id="empregados" placeholder="01" />
				</div>
				<div class="grid w-full items-center gap-1.5">
					<Label for="administradora-anterior">Administradora Anterior</Label>
					<Input type="text" id="administradora-anterior" placeholder="Crase Sigma" />
				</div>
				<div class="grid w-full items-center gap-1.5">
					<Label for="elevadores">Numero de elevadores</Label>
					<Input type="number" id="elevadores" placeholder="01" />
				</div>
				<div class="grid w-full items-center gap-1.5">
					<Label for="pagamento-salario">Dia do pagamento de salario</Label>
					<Input type="number" id="pagamento-salario" placeholder="05" />
				</div>
				<RadioGroup class="grid w-full items-center gap-1.5" defaultValue="nao">
					<h2 class="text-sm font-medium leading-none">Ex-cliente</h2>

					<div class="inline-flex items-center h-9 py-1 gap-4">
						<div class="flex items-center gap-x-2">
							<RadioGroupItem value="nao" />
						</div>
						<div class="flex items-center gap-x-2">
							<RadioGroupItem value="sim" />
						</div>
					</div>
				</RadioGroup>
			</Card.Content>
		</Card.Root>
		<Card.Root class="w-full">
			<Card.Header>
				<Card.Title tag="h2">Dados do Contrato</Card.Title>
			</Card.Header>
			<Card.Content class="grid sm:grid-cols-2 md:grid-cols-4 place-items-center gap-4">
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
				<div class="grid w-full items-center gap-1.5">
					<Label for="duracao-contrato">Duração do contrato</Label>
					<Input type="number" id="duracao-contrato" placeholder="12" />
				</div>
				<RadioGroup class="grid w-full items-center gap-1.5" defaultValue="pacote-fechado">
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
				<div class="grid w-full items-center gap-1.5">
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
				<div class="grid w-full items-center gap-1.5">
					<Label for="bonificacao">Bonificação</Label>
					<Input type="number" id="bonificacao" placeholder="100" />
				</div>
				<div class="grid w-full items-center gap-1.5">
					<Label for="desconto">Desconto</Label>
					<Input type="number" id="desconto" placeholder="10" />
				</div>
				<div class="grid w-full items-center gap-1.5">
					<Label for="orcamento">Orçamento</Label>
					<Input type="number" id="orcamento" placeholder="10" />
				</div>
				<div class="grid w-full items-center gap-1.5">
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
				<div class="grid w-full items-center gap-1.5">
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
		<Card.Root>
			<Card.Header>
				<Card.Title tag="h2">Dados do sindico</Card.Title>
			</Card.Header>
			<Card.Content class="grid sm:grid-cols-2 md:grid-cols-4 place-items-center gap-4">
				<div class="grid w-full items-center gap-1.5">
					<Label for="sindico">Sindico</Label>
					<Input type="text" id="sindico" placeholder="José Silva Sauro" />
				</div>
			</Card.Content>
		</Card.Root>
		<!-- <Button on:click={() => printjs('printJs', 'html')}>Imprimir</Button> -->
	</form>
</Section>
