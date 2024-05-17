<script lang="ts">
	import Textfield from '$lib/components/Textfield.svelte';
	import * as Section from '$lib/components/section';
	import { Button } from '$lib/components/ui/button';
	import { Calendar } from '$lib/components/ui/calendar';
	import * as Card from '$lib/components/ui/card';
	import * as Popover from '$lib/components/ui/popover';
	import { cn } from '$lib/utils';
	import Icon from '@iconify/svelte';
	import { DateFormatter, getLocalTimeZone, type DateValue } from '@internationalized/date';
	import pp_rj from './padrao/pool/rj';

	let cpf = '';
	let cnpj = '';
	let rg = '';
	let emitidoPor = '';

	let numero = '';
	let tipo = 'Rua';
	let logradouro = '';
	let bairro = '';

	let nomeDoCondominio = '',
		unidades = '',
		unidadesExtenso = '';

	const df = new DateFormatter('pt-BR', {
		dateStyle: 'short'
	});
	let dataAssembléia: DateValue | undefined = undefined;
</script>

<Section.Root>
	<Card.Root>
		<Card.Header>
			<Card.Title>Dados do contrato</Card.Title>
		</Card.Header>

		<Card.Content class="grid grid-cols-1 md:grid-cols-3 place-items-center gap-4 w-full">
			<Textfield label="Nome do condomínio" bind:value={nomeDoCondominio} />
			<Textfield label="Numero de unidades" bind:value={unidades} />
			<Textfield label="Unidades por extenso" bind:value={unidadesExtenso} />

			<Textfield label="RG" bind:value={rg} />
			<Textfield label="CPF" bind:value={cpf} />
			<Textfield label="Emissão RG" bind:value={emitidoPor} />
			<Textfield label="CNPJ" bind:value={cnpj} />

			<Textfield label="Tipo" bind:value={tipo} />
			<Textfield label="Endereço" bind:value={logradouro} />
			<Textfield label="Numero" bind:value={numero} />
			<Textfield label="Bairro" bind:value={bairro} />
			<Popover.Root openFocus>
				<Popover.Trigger asChild let:builder>
					<div class="flex flex-col gap-1.5 w-full">
						<h1 class="text-sm font-medium leading-none">Inicio do contrato</h1>
						<Button
							variant="outline"
							class={cn(
								'w-full justify-start text-left font-normal',
								!dataAssembléia && 'text-muted-foreground'
							)}
							builders={[builder]}
						>
							<Icon icon="mdi:calendar" class="mr-2 h-4 w-4" />
							{dataAssembléia
								? df.format(dataAssembléia.toDate(getLocalTimeZone()))
								: 'Inicio do contrato'}
						</Button>
					</div>
				</Popover.Trigger>
				<Popover.Content class="w-auto p-0">
					<Calendar bind:value={dataAssembléia} initialFocus />
				</Popover.Content>
			</Popover.Root>

			<Card.Footer class="md:col-span-3 w-full">
				<Button type="submit" class="w-full">Imprimir</Button>
			</Card.Footer>
		</Card.Content>
	</Card.Root>

	<ol class="flex flex-col gap-6 pl-10 text-pretty">
		<li>
			<p>
				Por este instrumento particular de contrato que fazem entre si, como
				<strong>CONTRATANTE</strong> o Condomínio do Edifício
				<strong class="uppercase">“{nomeDoCondominio}”</strong>, situado na {tipo}
				{logradouro}, n.º {numero}, {bairro}, nesta cidade, composto de {unidades} ({unidadesExtenso})
				unidades autônomas, inscrito no <strong>CNPJ</strong> sob o n.º {cnpj}, representado pelo(a)
				seu(a) Síndico(a), Sr(a). , portador(a) da identidade n.º {rg} emitida pelo {emitidoPor} e o
				<strong>CPF</strong>
				n.º {cpf}
				(re)eleito(a) na Assembleia Geral Ordinária de {dataAssembléia}, doravante denominado
				simplesmente
				<strong>CONDOMÍNIO</strong> e como <strong>CONTRATADA</strong> a
				<strong>APSA - ADMINISTRAÇÃO PREDIAL E NEGÓCIOS IMOBILIÁRIOS S/A</strong>, com sede na
				Travessa do Ouvidor, n.º 32, nesta cidade, inscrita no <strong>CNPJ</strong> sob o número
				28.350.338/0001-92, Inscrição Municipal número 00.000.045-0, <strong>CRECI</strong> número
				J-253, doravante denominada simplesmente
				<strong>APSA</strong>, tem justo e acordado, a prestação de serviços que se regerá pelas
				cláusulas e condições que a seguir expõem.
			</p>
		</li>
		{#each pp_rj as pf, i (i)}
			{@const clause = String(i + 1)}
			<li class="flex flex-col">
				<h2 id={clause} class="font-medium">{clause} - {pf.title} :</h2>

				<ol class="flex flex-col pl-5 gap-2">
					{#each pf.sub_clause as sc, j (j)}
						{@const subClause = String(j + 1)}
						<li class="inline-flex gap-5 items-center group hover:text-muted-foreground">
							<Button variant="destructive" class="opacity-0 group-hover:opacity-100"
								><Icon icon="mdi:delete" /></Button
							>
							<p><span id="{clause}-{subClause}">{clause}.{subClause}</span> - {@html sc.text}</p>
						</li>
					{/each}
				</ol>
			</li>
		{/each}
	</ol>

	<div class="flex flex-col gap-2 p-4 text-pretty">
		6 - PRESTAÇÃO DE CONTAS: 6.1 - A APSA disponibilizará, mensalmente, a todos os condôminos
		cadastrados, a prestação de contas do CONDOMÍNIO, com o movimento de recebimentos e pagamentos
		realizados no mês anterior, exclusivamente em meio eletrônico, por acesso específico ao portal
		de internet da APSA. 6.2 - A APSA, mensalmente, no decorrer do mês seguinte a que se referir,
		disponibilizará ao CONDOMÍNIO, a pasta de prestação de contas, com a documentação comprobatória
		dos pagamentos lançados na sua conta corrente, acessíveis pelo síndico e conselho. 6.3 - Compete
		ao CONDOMÍNIO informar a alteração dos componentes da administração (síndico e conselho), para
		que a APSA possa mudar os poderes de acesso em seu portal de internet e/ou outra aplicação
		eletrônica, sendo a APSA isenta de responsabilidade por qualquer prejuízo decorrente de falha do
		CONDOMÍNIO quanto ao exercício dessa competência. 7 – GUARDA DE DOCUMENTAÇÃO: 7.1 – A APSA
		manterá sob sua guarda somente a documentação vigente do CONDOMÍNIO e necessária ao cumprimento
		do presente mandato, tais como livro de atas, livro de registro dos empregados, cópia da
		escritura de convenção e regulamento interno, contratos de conservação e manutenção dos
		equipamentos, apólices de seguros, etc., que lhe foram apresentados. 7.2 – A documentação
		relativa aos pagamentos do mês, será guardada pela APSA apenas no decorrer do mês a que se
		referir e até a disponibilização para o CONDOMÍNIO da pasta de prestação de contas digital,
		também disponível para download no site APSA, para exame e parecer do Conselho Consultivo e
		posterior aprovação em Assembleia. 8- ASSEMBLEIAS: 8.1 - A APSA, de acordo com as instruções do
		CONDOMÍNIO, providenciará a convocação das Assembleias Gerais, na forma e condições legais ou
		convencionadas, remetendo a todos os condôminos cadastrados o respectivo edital de convocação.
		8.2 - A convocação deverá ser entregue aos condôminos ou seus representantes legais, com
		antecedência mínima de 8 (oito) dias da data da realização da Assembleia, salvo quando a
		Convenção do CONDOMÍNIO estipular prazo maior ou menor. Para que as convocações possam ser
		preparadas e enviadas respeitando o prazo acima que prevalecer, o CONDOMÍNIO deverá fazer sua
		solicitação à APSA com 4 (quatro) dias úteis de antecedência, a contar do início do prazo
		estipulado como mínimo para o recebimento da convocação pelos condôminos ou seus representantes
		legais. O mesmo procedimento dar-se-á quando a convocação for solicitada por ¼ dos condôminos ou
		pelo “quorum” previsto na convenção para essa finalidade. 8.3 - A APSA não se responsabilizará
		por convocações feitas fora do prazo legal, quando isso ocorrer por exclusiva responsabilidade
		do CONDOMÍNIO. 8.4 - A APSA não se responsabilizará pelo conteúdo e adequação legal das atas de
		Assembleias realizadas sem a assistência especializada dos seus representantes. 9 – ORIENTAÇÃO
		TÉCNICA 9.1 - A APSA orientará tecnicamente o CONDOMÍNIO no que tange à gestão condominial,
		podendo indicar, quando necessário, profissionais especializados de outras áreas. É válido
		destacar que a APSA não presta serviços advocatícios e a eventual contratação desses serviços
		deve ser feita autonomamente. 10 – PROCURAÇÃO ESPECÍFICA: 10.1 - A APSA, neste ato, fica
		constituída como bastante procuradora do CONDOMÍNIO, com poderes para representá-lo junto às
		repartições públicas Estaduais e Federais, INSS, FGTS, Receita Federal, Ministério do Trabalho,
		Ministério da Educação e Caixa Econômica Federal, Sindicatos de classe, podendo para tanto
		executar e assinar documentos relativos aos atos administrativos referentes a relação
		trabalhista dos empregados da Outorgante, inclusive procedimentos administrativos com relação a
		aspectos trabalhistas e previdenciários, como documentos de admissão, demissão, FGTS, formalizar
		rescisão, efetivar pagamentos nas rescisões, fazer requerimentos, contestar e concordar, receber
		restituições ou créditos, podendo, ainda, substabelecer com reserva aos seus prepostos e tudo o
		mais que se torne necessário ao fiel cumprimento deste mandato. 11 - SEGUROS: 11.1 - A APSA dará
		orientação necessária ao CONDOMÍNIO na contratação dos seguros, solicitando cotação de mercado
		para renovação dos mesmos. 11.2 - A APSA não se responsabilizará pela não realização dos seguros
		obrigatórios, quando isso ocorrer por responsabilidade do CONDOMÍNIO. 12 - SISTEMA DE MALOTE:
		12.1 - A APSA manterá um sistema de malote (TRANSAPSA) para entrega e recolhimento de documentos
		no CONDOMÍNIO, mediante agendamento prévio. 12.2 - Não será permitido ao CONDOMÍNIO a remessa de
		valores em dinheiro ou cheque ao portador pelo sistema de malote, ficando a APSA isenta de
		qualquer responsabilidade pela não observância deste dispositivo. 12.3 - Toda e qualquer
		documentação a ser remetida pelo sistema de malote, tanto pela APSA quanto pelo CONDOMÍNIO,
		deverá ser devidamente protocolada para permitir o controle das mesmas. 13 - DISPOSITIVOS
		GERAIS: 13.1 - A APSA remeterá a todos os condôminos cadastrados, cópia das atas e, sempre que
		for determinado pelo CONDOMÍNIO, cartas, circulares, notificações e outras correspondências
		pertinentes. 13.2 - A APSA não se responsabilizará pela não execução de quaisquer serviços e as
		penalidades decorrentes, devido a impedimento legal ou operacional em virtude da falta de
		documentação não fornecida pelo CONDOMÍNIO, inclusive o CNPJ, CERTIFICADO DIGITAL ou acesso
		remoto aos arquivos de retorno de cobrança e de conciliação bancária da respectiva conta
		corrente. 13.3 - O CONDOMÍNIO fornecerá à APSA senha de acesso a sua conta bancária, exclusiva
		para consultas e acesso remoto aos arquivos de retorno de cobrança e de conciliação bancária da
		respectiva conta corrente, bem como pelos lançamentos eletrônicos na conta bancaria do
		CONDOMINIO, para pagamento das despesas que lhe forem apresentas. 14 - REMUNERAÇÃO DOS SERVIÇOS:
		14.1 - As partes ajustam que o CONDOMÍNIO pagará à APSA, como remuneração, por períodos de 12
		(doze) meses de prestação de serviços estipulados no presente contrato, 13 (treze) parcelas no
		valor de R$(.........), acrescida do imposto sobre serviços (ISS), vencendo uma parcela a cada
		mês, de janeiro a novembro, e duas parcelas em dezembro. 14.1.1 – Fica desde já estabelecido que
		no primeiro ano de vigência, a APSA concede em favor do CONDOMÍNIO contratante, bonificação de
		100% da parcela(s) _________. Caso não haja cumprimento na primeira vigência do referido
		contrato, o CONDOMÍNIO indenizará a contratada com o montante da bonificação concedida. O valor
		será debitado automaticamente da conta do condomínio. 14.2 - No eventual aumento da carga
		tributária, em decorrência da criação de novos impostos, da alteração da base de cálculo ou da
		alíquota de impostos já existentes ou qualquer outra alteração, o custo correspondente será
		automaticamente repassado para os preços praticados pela APSA na ocasião. 14.3 – O valor das
		parcelas será corrigido de acordo com os índices e periodicidade permitidos por Lei. 14.4 - Não
		estão incluídas no valor ajustado na cláusula 14.1, as despesas com: reprodução de documentos,
		custos operacionais de emissão, controle e cobrança de cotas extras acopladas ou não ao boleto
		da cota normal do CONDOMÍNIO, assistência às Assembleias, qualquer outro encargo ou tributo que
		venha a ser estabelecido por Lei, serviços extraordinários para o cumprimento de obrigações
		acessórias e de manutenção junto a órgãos públicos como a Receita Federal do Brasil, Ministério
		do Trabalho, INSS e Caixa Econômica Federal, inclusive a elaboração e entrega da DIRF, RAIS,
		REINF ou E-SOCIAL ou renovação da procuração eletrônica, certificação digital, material de
		expediente, atualização do FAP, tarifas e impostos incidentes sobre a utilização de serviços
		bancários para pagamento de salários através de meio eletrônico, serviço de cobrança de cotas
		condominiais através da rede bancária, inclusive tarifa bancária e custos de processamento,
		tarifas postais de remessa de correspondências, serviços de terceiros (despachantes, advogados,
		etc.), levantamentos e regularização de eventuais pendências de períodos anteriores ao início da
		prestação de serviços da APSA, as quais serão debitadas na conta corrente do CONDOMÍNIO sempre
		que ocorrerem. As despesas com a assistência às Assembleias e serviços de terceiros
		(despachantes, advogados, contadores, etc.) serão pagas diretamente aos respectivos favorecidos
		14.5 - O valor ajustado na cláusula 14.1 leva em consideração o fato de o CONDOMÍNIO manter sua
		conta corrente no banco Itaú, para recebimento de cotas condominiais normais ou extraordinárias
		e pagamento de suas despesas. Na hipótese de passar a movimentar conta corrente em outra
		instituição bancária, o CONDOMÍNIO desde já autoriza que o valor previsto na clausula 14.1,
		vigente na ocasião, seja revisto pela APSA. 15 - VIGÊNCIA: 15.1 – O presente contrato de
		prestação de serviços vigorará no período de a , sendo renovado, automaticamente, por um novo
		período de 12 (doze) meses, e assim sucessivamente, se não houver manifestação em contrário.
		15.2 - O presente contrato, a partir dessa data, torna sem efeito o acordo assinado em . 16 –
		RESCISÃO: 16.1 - O presente contrato poderá ser rescindido sem qualquer indenização, ao final de
		cada período vigente, mediante a prévia manifestação escrita de uma das partes, com antecedência
		mínima de 60 (sessenta) dias do seu término. 16.1 - Ao final dos 12 (doze) primeiros meses de
		sua vigência, o presente contrato poderá ser rescindido em qualquer época, sem qualquer
		indenização, mediante a prévia manifestação escrita de uma das partes, com antecedência mínima
		de 60 (sessenta) dias. 16.1 - O presente contrato poderá ser rescindido em qualquer época, sem
		qualquer indenização, mediante a prévia manifestação escrita de uma das partes, com antecedência
		mínima de 60 (sessenta) dias. 16.1 - Em razão da condição especial de negociação, o presente
		contrato poderá ser rescindido ao final de 90 (noventa) dias, sem qualquer indenização, mediante
		a prévia manifestação escrita de uma das partes, com antecedência mínima de 30 (trinta) dias.
		Após o período inicial de 90 (noventa) dias, o presente contrato também poderá ser rescindido
		sem qualquer indenização, ao final de cada período vigente, mediante a prévia manifestação
		escrita de uma das partes, com antecedência mínima de 60 (sessenta) dias do seu término. 16.2 -
		O não cumprimento do prazo estabelecido no item 16.1 para rescisão do presente contrato
		implicará no pagamento da indenização prevista no artigo 603 do Código Civil Brasileiro, cujo
		valor será contabilizado na conta corrente do CONDOMÍNIO, por ocasião da prestação de contas
		final. 16.3- O presente contrato também poderá ser rescindido de pleno direito, em casos de
		inadimplemento de suas cláusulas, respondendo a parte infratora pelas perdas e danos
		decorrentes. 16.4 - O presente contrato somente se extinguirá de pleno direito no ato da
		formalização da sua rescisão, que deverá ocorrer no prazo máximo de 30 (trinta) dias, contados
		da data do encerramento da prestação dos serviços, com a entrega dos documentos pertinentes e
		mediante a mútua quitação da conta corrente do CONDOMÍNIO, com o pagamento do saldo existente.
		Caso a conta corrente não esteja com saldo disponível, serão debitados na mesma os encargos
		financeiros praticados na época, até sua efetiva quitação, independentemente de ação própria de
		cobrança que desde logo poderá ser intentada ou, outra medida que possa ser tomada pela parte
		interessada. 16.5 - A parte que retardar a extinção do presente contrato além do prazo
		estipulado no item 16.4, se obriga a pagar a outra parte multa compensatória no valor
		equivalente a remuneração prevista no item 14.1, devidamente atualizada, durante cada mês em que
		este se prolongar, a qual será contabilizada na conta corrente do CONDOMÍNIO. 17 - DISPOSIÇÕES
		ESPECIAIS SOBRE DOCUMENTOS E ASSINATURAS ELETRÔNICAS 17.1 - As partes declaram que o presente
		contrato possui igual validade e veracidade de todos os seus termos, independentemente de
		produzido e celebrado na forma física ou na forma eletrônica, a livre critério das partes. 17.2
		- As partes declaram que as assinaturas eletrônicas, quando adotada a forma eletrônica do
		contrato, são plenamente válidas e eficazes, independentemente de certificação, uma vez que
		foram utilizados meios idôneos, seguros e consolidados para comprovação de autoria,
		temporalidade e integridade do documento eletrônico assinado, assim apto a produzir todos os
		efeitos na esfera jurídica, inclusive em relação a terceiros. 17.3 - As partes declaram que os
		endereços de correspondência eletrônica (e-mail) informados neste documento, em ficha cadastral
		e/ou por envio de correspondência eletrônica à administradora ou ao contratante, foram pelas
		próprias partes informados, estando ativos e plenamente seguros e válidos para integrar o
		processo de assinatura eletrônica e recebimento de comunicados e notificações acerca do próprio
		contrato, incluindo atos integrantes do processo de assinatura eletrônica. 18 - LGPD 18.1 – A
		APSA terá acesso a determinados dados e informações de interesse do CONDOMINIO obtidos em razão
		das obrigações decorrentes deste contrato, os quais identificam ou permitem a identificação de
		pessoas naturais (“Dados Pessoais”), em especial quando da execução das atividades pertinentes.
		Assim, a APSA e o CONDOMINIO obrigam-se mutuamente a observar as leis, regulamentos e melhores
		práticas acerca da segurança, da confidencialidade e da proteção dos dados pessoais, em especial
		as disposições da LGPD – Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018) para
		proteção desses dados e preservação da privacidade dos respectivos titulares, bem como
		comprometem-se a auxiliarem-se mutuamente, na melhor medida possível, para evitar e mitigar
		incidentes que possam levar à divulgação ou destruição acidental ou ilícita desses Dados
		Pessoais. 18.2 – Cada uma das partes será a única e exclusiva responsável por eventuais perdas e
		danos sofridos pela outra parte, indenizando e mantendo-a a salvo e livre de prejuízo de todas
		as reclamações, ações, penalidades, perdas, danos ou prejuízos incorridos por ela em decorrência
		de violação da LGPD e demais leis e regulamentos relativos à privacidade e proteção de Dados
		Pessoais por sí, seus empregados e contratados, sendo garantido o direito de regresso. 19 - FORO
		Assim, por estarem justas e contratadas, assinam as partes o presente contrato na presença de 02
		(duas) testemunhas e elegem o Foro da Comarca da Capital da Bahia para apreciar eventuais
		demandas oriundas do presente contrato, renunciando a qualquer outro, por mais privilegiado que
		seja. Salvador, ___ de _____________ de _______. COND. DO EDIF. “_______________________” APSA
		TESTEMUNHAS: Nome: CPF: Nome: CPF: CLÁUSULAS SUBSTUTIVAS a) Reajuste de valores  quando da
		utilização de índice pré-estipulado : 14.3 – O valor estabelecido na clausula 14.1 será
		reajustado ao final de cada 12 (doze) meses, ou, em menor período, quando permitido por Lei, com
		base variação do INPC do IBGE (ou do IGP-M da FGV) acumulado no período. Na falta deste índice
		será utilizado um outro índice oficial equivalente. Atenção ::A numeração das cláusulas também
		sofrerá alteração
	</div>
</Section.Root>
