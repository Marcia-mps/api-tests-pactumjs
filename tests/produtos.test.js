const { spec } = require('pactum')
const { startMockGraphqlServer } = require('./support/mockGraphqlServer')

describe('Serviço de Produtos - GraphQL', () => {
  let server
  const BASE_URL = 'http://localhost:4002/graphql'

  before(async () => {
    server = await startMockGraphqlServer(4002)
  })

  after(() => {
    server.close()
  })

  it('Deve adicionar um produto', async () => {
    await spec()
      .post(BASE_URL)
      .withJson({
        query: `mutation { addProduct(name: "Notebook", price: 3500) { id name price } }`
      })
      .expectStatus(200)
      .expectJsonLike({
        data: {
          addProduct: {
            id: 10,
            name: 'Notebook',
            price: 3500
          }
        }
      })
      .expectJsonSchema({
        type: 'object',
        required: ['data'],
        properties: {
          data: {
            type: 'object',
            required: ['addProduct'],
            properties: {
              addProduct: {
                type: 'object',
                required: ['id', 'name', 'price'],
                properties: {
                  id: { type: 'number' },
                  name: { type: 'string' },
                  price: { type: 'number' }
                }
              }
            }
          }
        }
      })
  })

  it('Deve editar um produto', async () => {
    await spec()
      .post(BASE_URL)
      .withJson({
        query: `mutation { editProduct(id: 10, name: "Notebook Gamer", price: 4500) { id name price } }`
      })
      .expectStatus(200)
      .expectJsonLike({
        data: {
          editProduct: {
            id: 10,
            name: 'Notebook Gamer',
            price: 4500
          }
        }
      })
  })

  it('Deve deletar um produto', async () => {
    await spec()
      .post(BASE_URL)
      .withJson({
        query: `mutation { deleteProduct(id: 10) { success } }`
      })
      .expectStatus(200)
      .expectJsonLike({
        data: {
          deleteProduct: {
            success: true
          }
        }
      })
  })
})