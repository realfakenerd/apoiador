<script lang="ts">
	import InputGroup from '$lib/components/InputGroup.svelte';
	import { Button } from '$lib/components/ui/button';
	import { Calendar } from '$lib/components/ui/calendar';
	import * as Card from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import * as Popover from '$lib/components/ui/popover';
	import * as RadioGroup from '$lib/components/ui/radio-group';
	import * as Select from '$lib/components/ui/select';
	import { cn } from '$lib/utils';
	import Icon from '@iconify/svelte';
	import { DateFormatter, getLocalTimeZone, type DateValue } from '@internationalized/date';
	import agencias from './agencias';

	const df = new DateFormatter('en-US', {
		dateStyle: 'long'
	});
	let value: DateValue | undefined = undefined;
</script>

<section class="flex flex-col gap-6 p-8">
	<h1 class="text-3xl font-bold tracking-tight">Comunicação de Entrada de Clientes</h1>
	<form class="space-y-6">
		<Card.Root class="w-full">
			<Card.Header>
				<Card.Title tag="h2">Dados do Condomínio</Card.Title>
			</Card.Header>

			<Card.Content class="grid grid-cols-4 place-items-center gap-4">
				<Select.Root>
					<Select.Trigger class="w-full col-span-1">
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
				<RadioGroup.Root class="col-span-3 grid w-full items-center gap-1.5" value="pool">
					<h2 class="text-sm font-medium leading-none">Tipo de conta</h2>

					<div class="inline-flex items-center gap-4 h-9 py-1">
						<div class="flex items-center gap-x-2">
							<RadioGroup.Item value="pool" id="pool" />
							<Label for="pool">Pool</Label>
						</div>
						<div class="flex items-center gap-x-2">
							<RadioGroup.Item value="basico" id="basico" />
							<Label for="basico">Básico</Label>
						</div>
						<div class="flex items-center gap-x-2">
							<RadioGroup.Item value="propria" id="propria" />
							<Label for="propria">Própria</Label>
						</div>
					</div>
				</RadioGroup.Root>

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
				<RadioGroup.Root class="grid w-full items-center gap-1.5" value="nao">
					<h2 class="text-sm font-medium leading-none">Ex-cliente</h2>

					<div class="inline-flex items-center h-9 py-1 gap-4">
						<div class="flex items-center gap-x-2">
							<RadioGroup.Item value="nao" id="nao" />
							<Label for="nao">Não</Label>
						</div>
						<div class="flex items-center gap-x-2">
							<RadioGroup.Item value="sim" id="sim" />
							<Label for="sim">Sim</Label>
						</div>
					</div>
				</RadioGroup.Root>
			</Card.Content>
		</Card.Root>
		<Card.Root class="w-full">
			<Card.Header>
				<Card.Title tag="h2">Dados do Contrato</Card.Title>
			</Card.Header>
			<Card.Content class="grid grid-cols-4 place-items-center gap-4">
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
				<RadioGroup.Root class="grid w-full items-center gap-1.5" value="pacote-fechado">
					<h2 class="text-sm font-medium leading-none">Tipo de contrato</h2>

					<div class="inline-flex gap-4 py-1 h-9">
						<div class="flex items-center gap-x-2">
							<RadioGroup.Item value="caonvencional" id="caonvencional" />
							<Label for="caonvencional">Convencional</Label>
						</div>
						<div class="flex items-center gap-x-2">
							<RadioGroup.Item value="pacote-fechado" id="pacote-fechado" />
							<Label for="pacote-fechado">Pacote fechado</Label>
						</div>
					</div>
				</RadioGroup.Root>
				<div class="grid w-full items-center gap-1.5">
					<Label for="taxa-adm">Taxa de administração</Label>
					<Input type="number" id="taxa-adm" placeholder="350" />
				</div>
				<RadioGroup.Root class="grid  w-full items-center gap-1.5" value="apsa">
					<h2 class="text-sm font-medium leading-none">Indice Reajuste</h2>

					<div class="inline-flex gap-4 py-1 h-9">
						<div class="flex items-center gap-x-2">
							<RadioGroup.Item value="apsa" id="apsa" />
							<Label for="apsa">APSA</Label>
						</div>
						<div class="flex items-center gap-x-2">
							<RadioGroup.Item value="ipca" id="ipca" />
							<Label for="ipca">IPCA</Label>
						</div>
					</div>
				</RadioGroup.Root>
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
				<RadioGroup.Root class="grid  w-full items-center gap-1.5">
					<h2 class="text-sm font-medium leading-none">Roteiro transapsa</h2>

					<div class="inline-flex gap-4 py-1 h-9">
						<div class="flex items-center gap-x-2">
							<RadioGroup.Item value="01" id="01" />
							<Label for="01">01</Label>
						</div>
						<div class="flex items-center gap-x-2">
							<RadioGroup.Item value="02" id="02" />
							<Label for="02">02</Label>
						</div>
					</div>
				</RadioGroup.Root>
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
			<Card.Content class="grid grid-cols-4 place-items-center gap-4">
				<div class="grid w-full items-center gap-1.5">
					<Label for="sindico">Sindico</Label>
					<Input type="text" id="sindico" placeholder="José Silva Sauro" />
				</div>
			</Card.Content>
		</Card.Root>
	</form>

	<form class="card flex flex-col gap-6 p-4" method="post">
		<section class="card rounded-lg p-2 gap-2">
			<h2 class="card-header text-title-large">Dados do sindico</h2>
			<Input label="Valor" />
			<Input label="Síndico" />
			<Input label="Endereço" />
			<Input label="Gerente da Conta" />
			<Input label="Parcial" />
			<Input label="CPF" />
			<Input label="Mandato até" />
			<Input type="tel" label="Telefone" />
			<Input label="Captador" />
			<Input label="Outras instruções" />
			<Input label="Outras instruções" />
			<Input label="Outras instruções" />
		</section>

		<div class="card-footer">
			<button class="btn w-full variant-filled">Enviar</button>
		</div>
	</form>
</section>
