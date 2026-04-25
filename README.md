# API Tests com PactumJS

Projeto de automação de testes de API utilizando PactumJS, Mocha e Mochawesome para validação de endpoints GraphQL.

## Tecnologias utilizadas

- Node.js
- PactumJS
- Mocha
- Mochawesome

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
