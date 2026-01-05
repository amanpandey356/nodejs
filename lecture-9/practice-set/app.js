//todo : Importing Express
const express = require('express')
const app = express()

//todo : adding middleware
app.use('/', (req, res, next) => {
  console.log("Welcome to dummy middleware 1", req.url, req.method)
  next()
})
app.use('/dummy', (req, res, next) => {
  console.log(`Welcome to dummy middleware 2`, req.url, req.method)
})
app.use('/response', (req, res, next) => {
  res.send('<h1>Sending Response<h1>')
})
app.use('/contact', (req, res, next) => {
  console.log("I am in contact form ", req.url, req.method)
  res.send(`<form action="/form-submit" method="POST" >
    <input name="firstname" placeholder="Enter YOur First Name" />
    <input name="lastname" placeholder="Enter YOur Last Name" />
    <input type="submit" value="submit" />
    </form>
    `)
})
app.post('/form-submit', (req, res, next)=>{
  console.log("Form Get Submitted ", req.url, req.method, res)
  res.send('<h1>Form Submit<h1>')
})
app.use('/', (req, res, next) => {
  res.send('<h1>Handling path : /</h1>')
})

//todo : creating a server
app.listen(3000, () => {
  console.log(`Your Application is running on http://localhost:${3000}`)
})
