//todo Importing required packages
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

//todo writing middleware
app.use('/', (req, res, next) => {
  console.log("My First Dummy middleware", req.url, req.method)
  next()
})
app.use('/', (req, res, next) => {
  console.log("My second dummy middleware", req.url, req.method)
  next()
})
app.get('/', (req, res, next) => {
  res.send("<h1>Hello World</h1>")
})
app.get('/contact-us', (req, res, next) => {
  res.send(`<form action="/contact-us" method="POST" >
      <input name="username" placeholder="Enter YOur Username" />
      <input name="gmail" placeholder="Enter Your G-mail" />
      <input type='submit' />
    </form>`)
})

app.use(bodyParser.urlencoded())

app.post('/contact-us', (req, res, next) => {
  console.log('Handling Contact-us for POST', req.url, req.method, req.body)
  res.send(`<form action="/contact-us" method="POST" >
      <input name="username" placeholder="Enter YOur Username" />
      <input name="gmail" placeholder="Enter Your G-mail" />
      <input type='submit' />
    </form>`)
})

//todo creating and running server
app.listen(3000, () => {
  console.log(`app running on http://localhost:${3000}`)
})