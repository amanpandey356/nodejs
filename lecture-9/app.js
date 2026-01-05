// Core Module
// const http = require('http')

// External Module
const express = require('express');

// Local Module
// const requestListener = require('./user')

const app = express()

// adding middleware
// app.use((req, res, next)=>{
//   console.log("Came in First Middleware",req.url, req.method)
//   next();
// })

//todo sending Response
// app.use((req, res, next)=>{
//   console.log("Came in Second Middleware",req.url, req.method)
//   res.send('<h1>Welcome To complete coding series</h1>')
// })

app.use('/', (req, res, next)=>{
  console.log('Came In First MiddleWare ', req.url, req.method)
  // res.send('<h1> Hello This is a Landing Page </h1>')
  next()
})

// app.use('/submit-details', (req, res, next)=>{
//   console.log('Came In Second MiddleWare ', req.url, req.method)
//   res.send('<h1> This is Submit-Detail Page </h1>')
// })

app.post('/submit-details', (req, res, next)=>{
  console.log("Need Post as well url")
  res.send('<h1> Current URL Possess a Post method as well submit-details url</h1>')
})

app.use('/',(req, res, next)=>{
  res.send('Came From another middleware')
})

// const server = http.createServer(app);

const PORT = 3002
app.listen(PORT,()=>{
  console.log(`The App is running at http://localhost:${PORT}`)
})
