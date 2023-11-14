<script lang="ts">
    import Textfield from '$lib/components/Textfield.svelte';
</script>


<section>
    <h1 class="text-title-large">Comunicação de Entrada de Clientes</h1>
</section>

<form class="card" method="post">
    <Textfield label="Conta" />
    <Textfield label="Condomínio"/>
    <Textfield label="Endereço" />
    <Textfield label="Município"/>
    <Textfield label="Unidades"/>
    <Textfield label="Número de Elevadores"/>
    <Textfield label="Bairro"/>
    <Textfield label="CEP"/>
    <Textfield label="CNPJ"/>
    <Textfield label="Administradora Anterior"/>
    <Textfield label="Dia de Pagamento do Salário"/>
    <Textfield label="Início do Contrato"/>
    <Textfield label="Taxa de administração"/>
    <Textfield label="Duração do Contrato"/>
    <Textfield label="Bonificação"/>
    <Textfield label="Desconto"/>
    <Textfield label="Data do vencimento da Cota"/>
    <Textfield label="Orçamento"/>
    <Textfield label="Intruções de Cobrança"/>
    <fieldset class="p-2">
        <legend>Dados do sindico</legend>
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
</fieldset>
</form>