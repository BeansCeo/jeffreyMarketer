if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}
const apiKey = process.env.apiKey
console.log(apiKey)
const express = require("express")
const app = express()
const fs = require("fs")
const port = 3000

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.listen(port)
