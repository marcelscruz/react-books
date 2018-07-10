const axios = require('axios')

module.exports = app => {
  // Endpoint to fetch all the list of books
  app.get('/api/v1/items', async (req, res, next) => {
    res.setHeader('Content-Type', 'application/json')
    const { count, offset } = req.query

    let url = `http://localhost:3004/books`

    if (offset && !count) {
      url = `http://localhost:3004/books?_start=${offset}`
    } else if (!offset && count) {
      url = `http://localhost:3004/books?_limit=${count}`
    } else if (offset && count) {
      url = `http://localhost:3004/books?_start=${offset}&_limit=${count}`
    }

    console.log('url', url)

    // Using json-server
    axios.get(url).then(booksFetched => {
      const booksList = []

      booksFetched.data.forEach(book => {
        booksList.push({
          id: book.id,
          link: `/api/v1/items/${book.id}`,
          title: book.title,
        })
      })

      res.send(booksList)
    })
  })
}
