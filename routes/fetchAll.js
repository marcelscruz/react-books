const axios = require('axios')

module.exports = app => {
  // Endpoint to fetch all the list of books
  app.get('/api/v1/items', async (req, res, next) => {
    res.setHeader('Content-Type', 'application/json')
    let { count, offset } = req.query
    count = parseInt(count)
    offset = parseInt(offset)

    let url = `http://localhost:3004/books`

    // if (count === 0) {
    //   count = undefined
    // }

    // if (offset && !count) {
    //   url += `?_start=${offset}`
    // } else if (!offset && count) {
    //   url += `?_limit=${count}`
    // } else if (offset && count) {
    //   url += `?_start=${offset}&_limit=${count}`
    // }

    console.log('url', url)

    // Using json-server
    axios.get(url).then(booksFetched => {
      const books = booksFetched.data
      const booksList = []

      const pages = Math.ceil(books.length / count)
      const firstIndex = offset * count - count
      const lastIndex = offset * count

      // Skip offset and go to lastIndex (offset + count)

      if (count !== 0) {
        // for (let i = offset; i <= lastIndex; i++) {
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

      console.log('length', books.length)
      console.log('count', count)
      console.log('pages', pages)
      console.log('firstIndex', firstIndex)
      console.log('lastIndex', lastIndex)

      res.send({
        books: booksList,
        pages,
      })
    })
  })
}
