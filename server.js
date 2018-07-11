const express = require('express')
const paginate = require('express-paginate')
const path = require('path')
const bodyParser = require('body-parser')
const axios = require('axios')
const proxy = require('subdomain-router')

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

// proxy({
//   host: 'http://localhost',
//   subdomains: {
//     '': 3000, // 'example.com'             <=> localhost:10000
//     client: 3000,
//     api: 3004, // 'www.example.com'         <=> localhost:10000
//   },
// }).listen(process.env.PORT || 5000)

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
