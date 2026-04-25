# API Tests com PactumJS

Este projeto tem como objetivo validar serviços de API utilizando PactumJS, simulando operações de um e-commerce com categorias e produtos.

## Tecnologias utilizadas

- Node.js
- PactumJS
- Mocha
- Mochawesome

## Estrutura do projeto

tests/
- categorias.test.js
- produtos.test.js
- support/
  - mockGraphqlServer.js

## Cenários testados

### Categorias
- Adicionar categoria
- Editar categoria
- Remover categoria

### Produtos
- Adicionar produto
- Editar produto
- Remover produto

## Validações realizadas

- Status HTTP 200
- Validação do corpo da resposta
- Validação de contrato com JSON Schema

## Relatórios

O projeto gera relatórios de execução utilizando Mochawesome.

## Como executar

```bash
npm install
npm test

## Observação

Foi utilizado um mock de servidor GraphQL local para simular as respostas da API.
