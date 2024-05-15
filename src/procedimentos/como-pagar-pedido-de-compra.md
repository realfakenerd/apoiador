---
title: Pedido de compras
description: Como fazer a requisição dos pedidos de compra
published: '11-01-2023'
updated: '12-01-2023'
image: '/foto_de_papel.png'
category:
  - rp
  - pedido
  - compra
---

Para fazer a requisição e gerar o titulo para pagamento, primeiramente deve-se
receber a DANFE e o boleto para contabilizado e pago pela APSA. Após receber
esse documento siga o passo a passo abaixo para gerar o titulo de pagamento.

## Como fazer

### Passo 1 - Localizar a tela

Primeiro deve achar o caminho para a tela correta:
![tela de compras](/rp-pedido-de-compra/tela-1.png)
`MXM > COMPRAS > PROCESSOS > ATENDIMENTO DOS PEDIDOS DE COMPRA`

### Passo 2 - Preencher dados

Após clicar na opção de 'Atendimento dos pedidos de compra' é nescessário
preencher os campos da seguinte forma.

![tela do atendimento dos pedidos de compra](/rp-pedido-de-compra/tela-2.png)

Em empresas deve-se por 0001, que corresponde a opção `APSA ADM Predial e negócios imobiliarios`.

Em fornecedor pode-se apertar o botão `F1` para achar de forma mais fácil
o fornecedor correto por exemplo, Nobeless para produtos de copa/coizinha
e Papelex para produtos de escritório.

Depois de preenchidas essas informações, deverá clicar em `Abrir Pedidos`.

### Passo 3 - Localizar pedido

Uma nova tela abrirá, onde deverá preencher a informação do número de pedido
que foi gerado no campo `pedido`.

![tela consulta de pedidos](/rp-pedido-de-compra/tela-3.png)

Depois do campo `pedido` ser preenchida corretamente irá aparecer uma lista
com os produtos dos quais foram feitos os pedidos.

![tela consulda de pedidos preenchida](/rp-pedido-de-compra/tela-4.png)

Clique no botão `Marcar Todos` e após isso clique em `OK`.

> Caso algum produto do pedido não tenha sido enviado, não marque este produto na lista.

### Passo 4 - Concertar valores errados

Todos os items marcados na tela anterior deverão aparecer numa lista.

![tela atendimento pedido preenchida](/rp-pedido-de-compra/tela-5.png)

Confira se o número de items está correto e se o valor de cada produto
está igual ao da nota DANFE.

Caso esteja, clique em `gravar` e aguarde gerar uma mensagem aparecer.

### Passo 5

Será direcionado para aba `Titulo a pagar` com uma mensagem informando
número de atendimento gerado.

![tela titulo a pagar](/rp-pedido-de-compra/tela-6.png)

Apenas feche a tela da mensagem e a tela `Compras`.

### Passo 6

Agora, para finalizar vá para a tela de `Contas a pagar`.

![tela contas a pagar](/rp-pedido-de-compra/tela-7.png)
`MXM > CONTAS A PAGAR > PROCESSOS > MANUNTENÇÃO DE TÍTULOS`

### Passo 7

Preencha o fornecedor e como da ultima vez, se for nescessário, use o
botão `F1` para localiza-lo de forma mais rápida.

![tela titulo a pagar](/rp-pedido-de-compra/tela-8.png)

Preencha o campo de `Doc. Fiscal` com o numero da nota DANFE, o
vencimento do boleto e a data de emissão.

### Passo 8

Para finaliza a emissão, não grave apenas imprima com as informações.

![tela titulo para impressão](/rp-pedido-de-compra/tela-9.png)

Quando o titulo aparecer na tela salve ele onde desejar com o
com o nome do documento seguindo o padrão `Titulo {numero do titulo} - {nome do forcedor}.pdf`.
Assim como na imagem abaixo.

![tela salvar arquivos](/rp-pedido-de-compra/tela-10.png)
