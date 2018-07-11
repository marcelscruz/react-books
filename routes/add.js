const axios = require('axios')

module.exports = app => {
  // Endpoint to add a new book from Add
  app.post('/api/v1/items/add', (req, res) => {
    const { title, author, price, image } = req.body

    // Using json-server
    axios
      .post('http://localhost:3004/books', {
        title,
        author,
        price,
        image,
      })
      .then(res => {
        console.log(res)
      })
      .catch(error => {
        console.log(error)
      })
  })
}
