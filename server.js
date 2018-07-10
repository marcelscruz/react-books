const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()

// Serve static files from the React app if in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')))
}

// Body Parser Middleware
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))

// Routes
require('./routes/booksAPI')(app)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
