// ***** Libraries ***** //
const axios = require('axios')

module.exports = app => {
  // Endpoint to fetch an specific book by ID from List
  app.get('/api/v1/items/:id', (req, res) => {
    // Set the Content-Type of the method's response
    res.setHeader('Content-Type', 'application/json')

    // Fetching data from JSON Server
    axios
      .get(`http://localhost:3004/books?id=${req.params.id}`)
      .then(bookFetched => {
        book = bookFetched.data[0] // Requested item
        res.send(book)
      })
  })

  // Endpoint to fetch an specific book by ID from Edit
  app.get('/edit/api/v1/items/:id', (req, res) => {
    // Set the Content-Type of the method's response
    res.setHeader('Content-Type', 'application/json')

    // Fetching data from JSON Server
    axios
      .get(`http://localhost:3004/books?id=${req.params.id}`)
      .then(bookFetched => {
        book = bookFetched.data[0] // Requested item
        res.send(book)
      })
  })
}
