const axios = require('axios')
const db = require('../db/db.json')

module.exports = app => {
  // Endpoint to fetch all the list of books
  app.get('/api/v1/items', async (req, res, next) => {
    // console.log(req.query)
    const { count, offset } = req.query

    // Some work should be done here to provide pagination
    // if (count) {
    //   console.log('there is count', count)
    // }
    // if (offset) {
    //   console.log('there is offset', offset)
    // }

    const booksList = []

    db.books.forEach(book => {
      booksList.push({
        id: book.id,
        link: `/api/v1/items/${book.id}`,
        title: book.title,
      })
    })

    res.setHeader('Content-Type', 'application/json')
    res.send(booksList)
  })
}
