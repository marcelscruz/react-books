const axios = require('axios')

module.exports = app => {
  // Endpoint to fetch all the list of books
  app.get('/api/v1/items', async (req, res, next) => {
    res.setHeader('Content-Type', 'application/json')
    let { count, offset } = req.query
    count = parseInt(count)
    offset = parseInt(offset)

    // Using json-server
    axios.get(`http://localhost:3004/books`).then(booksFetched => {
      const books = booksFetched.data
      const booksList = []

      let pages = Math.ceil(books.length / count)
      const firstIndex = offset * count - count
      const lastIndex = offset * count

      if (count !== 0) {
        for (let i = firstIndex; i < lastIndex; i++) {
          if (!books[i]) break

          booksList.push({
            id: books[i].id,
            link: `/api/v1/items/${books[i].id}`,
            title: books[i].title,
          })
        }
      } else {
        books.forEach(book => {
          booksList.push({
            id: book.id,
            link: `/api/v1/items/${book.id}`,
            title: book.title,
          })
        })
      }

      if (pages === Infinity) {
        pages = 1
      }

      res.send({
        books: booksList,
        pages,
      })
    })
  })
}
