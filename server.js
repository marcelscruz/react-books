// ***** Node ***** //
const path = require('path')

// ***** Libraries ***** //
const express = require('express')

const app = express()

// Serve client static files if in production
app.use(express.static(path.join(__dirname, 'client/build')))

// API endpoints
require('./routes/fetchAll')(app)
require('./routes/fetchByID')(app)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
