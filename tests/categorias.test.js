const { spec } = require('pactum')
const { startMockGraphqlServer } = require('./support/mockGraphqlServer')

describe('Serviço de Categorias - GraphQL', () => {
  let server
  const BASE_URL = 'http://localhost:4001/graphql'

  before(async () => {
    server = await startMockGraphqlServer(4001)
  })

  after(() => {
    server.close()
  })

  it('Deve adicionar uma categoria', async () => {
    await spec()
      .post(BASE_URL)
      .withJson({
        query: `mutation { addCategory(name: "Eletrônicos") { id name } }`
      })
      .expectStatus(200)
      .expectJsonLike({
        data: {
          addCategory: {
            id: 1,
            name: 'Eletrônicos'
          }
        }
      })
      .expectJsonSchema({
        type: 'object',
        required: ['data'],
        properties: {
          data: {
            type: 'object',
            required: ['addCategory'],
            properties: {
              addCategory: {
                type: 'object',
                required: ['id', 'name'],
                properties: {
                  id: { type: 'number' },
                  name: { type: 'string' }
                }
              }
            }
          }
        }
      })
  })

  it('Deve editar uma categoria', async () => {
    await spec()
      .post(BASE_URL)
      .withJson({
        query: `mutation { editCategory(id: 1, name: "Tecnologia") { id name } }`
      })
      .expectStatus(200)
      .expectJsonLike({
        data: {
          editCategory: {
            id: 1,
            name: 'Tecnologia'
          }
        }
      })
  })

  it('Deve deletar uma categoria', async () => {
    await spec()
      .post(BASE_URL)
      .withJson({
        query: `mutation { deleteCategory(id: 1) { success } }`
      })
      .expectStatus(200)
      .expectJsonLike({
        data: {
          deleteCategory: {
            success: true
          }
        }
      })
  })
})