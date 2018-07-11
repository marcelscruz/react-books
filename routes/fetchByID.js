const axios = require('axios')
const db = require('../db/db.json')

module.exports = app => {
  // Endpoint to fetch an specific book by ID from List
  app.get('/api/v1/items/:id', (req, res) => {
    res.setHeader('Content-Type', 'application/json')

    // Using json-server
    axios
      .get(`http://localhost:3004/books?id=${req.params.id}`)
      .then(bookFetched => {
        book = bookFetched.data[0]
        res.send(book)
      })
  })

  // Endpoint to fetch an specific book by ID from Edit
  app.get('/edit/api/v1/items/:id', (req, res) => {
    res.setHeader('Content-Type', 'application/json')

    // Using json-server
    axios
      .get(`http://localhost:3004/books?id=${req.params.id}`)
      .then(bookFetched => {
        book = bookFetched.data[0]
        res.send(book)
      })
  })
}
