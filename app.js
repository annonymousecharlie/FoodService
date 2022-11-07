const express = require('express')
const app = express()


app.listen(8080)
app.get('/ping', function (req, res) {
    res.send('GET request to homepage')
  })