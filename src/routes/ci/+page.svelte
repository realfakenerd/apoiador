<script lang="ts">
    import Textfield from '$lib/components/Textfield.svelte';
	import Select from '$lib/components/selectors/Select.svelte';
    import { RadioContainer } from '$lib/components/selectors/radio';
	import agencias from './agencias';
</script>


<section>
    <h1 class="text-title-large">Comunicação de Entrada de Clientes</h1>
</section>


<form class="card gap-2" method="post">
    <div class="card card-outlined gap-2">
        <section class="form-section items-center py-2">
            <Select label="Agencias" options={agencias}/>
            <RadioContainer name="teste" radio_list={['Pool', 'Básico', 'Próprio']}/>
        </section>
        
        <section class="form-section">
            <Textfield class="w-1/2" label="Conta" />
            <Textfield class="w-full" label="Condomínio"/>
        </section>
        <section class="form-section">
            <Textfield class="w-full" label="Endereço" />
            <Textfield class="w-1/2" label="Bairro"/>
        </section>
        <section class="form-section">
            <Textfield class="w-full" label="Município"/>
            <Select label="Estado" options={['','Rio de Janeiro', 'São Paulo']}/>
            <Textfield label="CEP"/>
        </section>
        <section class="form-section">
            <Select label="Tipo" options={['', 'Residencial', 'Comercial']}/>
            <Textfield label="CNPJ"/>
        </section>
        <section class="form-section">
            <Textfield label="Unidades"/>
            <Textfield label="Empregados"/>
            <Textfield label="Administradora Anterior"/>
        </section>
        <section class="form-section items-center">
            <Textfield label="Numero de elevadores"/>
            <div class="inline-flex gap-2">
                <span>ex cliente apsa</span>
                <RadioContainer name="excliente" radio_list={['Sim', 'Não']}/>
            </div>
            <Textfield label="Dia de Pagamento do Salário"/>
        </section>
    </div>
    <div class="card card-outlined gap-2">
        <section class="form-section">
            <Textfield label="Início do Contrato"/>
            <Textfield label="Duração do Contrato"/>
            <Select label="Tipo de Contrato" options={['','Convencional', 'Pacote Fechado']}/>
        </section>
        <section class="form-section">
            <Textfield label="Taxa de administração"/>
            <Select label="Indíce Reajuste" options={['', 'APSA', 'IPCA']}/>
            <Textfield label="Bonificação"/>
        </section>
        <section class="form-section">
            <Textfield label="Desconto"/>
        </section>
        <section class="form-section">
            <Textfield label="Orçamento"/>
            <Textfield label="Valor Médio da Cota"/>
            <Select label="Roteiro Transapsa" options={['', '01', '02']}/>
        </section>
        <Textfield label="Intruções de Cobrança"/>
        <Textfield label="Data do vencimento da Cota"/>
    </div>
    <section class="card card-outlined gap-2">
        <h2 class="text-title-large">Dados do sindico</h2>
        <Textfield label="Valor"/>
        <Textfield label="Síndico"/>
        <Textfield label="Endereço"/>
        <Textfield label="Gerente da Conta"/>
        <Textfield label="Parcial"/>
        <Textfield label="CPF"/>
        <Textfield label="Mandato até"/>
        <Textfield label="Telefone"/>
        <Textfield label="Captador"/>
        <Textfield label="Outras instruções"/>
        <Textfield label="Outras instruções"/>
        <Textfield label="Outras instruções"/>
    </section>

    <button type="submit">enviar</button>
</form>

<style>
    .form-section {
        display: flex;
        gap: theme(gap.2);
        width: 100%;
    }
</style>