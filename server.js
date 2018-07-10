const express = require('express')
const paginate = require('express-paginate')
const path = require('path')
const bodyParser = require('body-parser')
const axios = require('axios')

axios.defaults.headers.post['Content-Type'] = 'application/json'

const app = express()

// Serve static files from the React app if in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')))
}

// Aplly pagination functionality to all routes
app.use(paginate.middleware(10, 50))

// Body Parser Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Routes
require('./routes/fetchAll')(app)
require('./routes/fetchByID')(app)
require('./routes/add')(app)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
