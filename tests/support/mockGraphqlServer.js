const http = require('http')

function startMockGraphqlServer(port) {
  const server = http.createServer((req, res) => {
    let body = ''

    req.on('data', chunk => {
      body += chunk
    })

    req.on('end', () => {
      const { query } = JSON.parse(body)

      let response = {}

      if (query.includes('addCategory')) {
        response = { data: { addCategory: { id: 1, name: 'Eletrônicos' } } }
      }

      if (query.includes('editCategory')) {
        response = { data: { editCategory: { id: 1, name: 'Tecnologia' } } }
      }

      if (query.includes('deleteCategory')) {
        response = { data: { deleteCategory: { success: true } } }
      }

      if (query.includes('addProduct')) {
        response = { data: { addProduct: { id: 10, name: 'Notebook', price: 3500 } } }
      }

      if (query.includes('editProduct')) {
        response = { data: { editProduct: { id: 10, name: 'Notebook Gamer', price: 4500 } } }
      }

      if (query.includes('deleteProduct')) {
        response = { data: { deleteProduct: { success: true } } }
      }

      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify(response))
    })
  })

  return new Promise(resolve => {
    server.listen(port, () => resolve(server))
  })
}

module.exports = { startMockGraphqlServer }