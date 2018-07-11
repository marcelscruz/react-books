// ***** Libraries ***** //
const axios = require('axios')

module.exports = app => {
  // Endpoint to fetch all the list of books
  app.get('/api/v1/items', async (req, res) => {
    // Set the Content-Type of the method's response
    res.setHeader('Content-Type', 'application/json')

    let { count, offset } = req.query
    count = parseInt(count)
    offset = parseInt(offset)

    // Fetching data from JSON Server
    axios.get(`http://localhost:3004/books`).then(booksFetched => {
      const books = booksFetched.data // Fetched data
      const booksList = [] // Array to be sent in response's body

      // Find number of pages
      let pages = Math.ceil(books.length / count)

      // If count isn't 0, then return requested range
      if (count !== 0) {
        // Find range of items to be sent
        const firstIndex = offset * count - count
        const lastIndex = offset * count

        for (let i = firstIndex; i < lastIndex; i++) {
          if (!books[i]) break // If lastIndex is greater than book's list length

          booksList.push({
            id: books[i].id,
            link: `/api/v1/items/${books[i].id}`,
            title: books[i].title,
          })
        }
      } else {
        // If count is 0, then return all items

        books.forEach(book => {
          booksList.push({
            id: book.id,
            link: `/api/v1/items/${book.id}`,
            title: book.title,
          })
        })
      }

      // If returning all items, then pages must be 1
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
