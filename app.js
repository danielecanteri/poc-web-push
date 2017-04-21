var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.use(bodyParser());
app.use(express.static('public'))

app.listen(process.env.PORT, function () {
  console.log(`Example app listening on port ${process.env.PORT}!`)
})