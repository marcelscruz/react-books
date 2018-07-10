const axios = require('axios')
const db = require('../db/db.json')

module.exports = app => {
  app.get('/api/v1/items', (req, res) => {
    console.log(req.query)
    const { count, offset } = req.query

    if (count) {
      console.log('there is count', count)
    }
    if (offset) {
      console.log('there is offset', offset)
    }

    res.setHeader('Content-Type', 'application/json')
    res.send(db)
  })
}
