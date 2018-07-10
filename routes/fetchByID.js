const axios = require('axios')
const db = require('../db/db.json')

module.exports = app => {
  // Endpoint to fetch an specific book by ID
  app.get('/api/v1/items/:id', (req, res) => {
    res.setHeader('Content-Type', 'application/json')

    // Reading directly from the file
    // let book

    // Loop through objects to find the requested ID
    // for (let item in db.books) {
    //   const itemId = db.books[item].id

    // Params is string and item ID is integer, so == for no type conversion
    //   if (itemId == req.params.id) {
    //     book = db.books[item]
    //     break
    //   }
    // }
    // res.send(book)

    // Using json-server
    axios
      .get(`http://localhost:3004/books?id=${req.params.id}`)
      .then(bookFetched => {
        book = bookFetched.data[0]
        res.send(book)
      })
  })
}
