const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const app =express()

const PORT = 8080;

app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
)

app.post('/api', (request, response) => {
    console.log(request)
})