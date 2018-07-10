const axios = require('axios')

module.exports = app => {
  // Endpoint to add a new book
  app.post('/api/v1/add', (req, res) => {
    console.log(req.body)
    const { title, author, price } = req.body

    // Using json-server
    axios
      .post('http://localhost:3004/books', {
        title,
        author,
        price,
      })
      .then(res => {
        console.log(res)
      })
      .catch(error => {
        console.log(error)
      })
  })
}
