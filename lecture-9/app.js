// Core Module
// const http = require('http')

// External Module
const express = require('express');

// Local Module
// const requestListener = require('./user')

const app = express()

// adding middleware
app.use((req, res, next)=>{
  console.log("Came in First Middleware",req.url, req.method)
  next();
})
app.use((req, res, next)=>{
  console.log("Came in Second Middleware",req.url, req.method)
  res.send('<h1>Welcome To complete coding series</h1>')
})

// const server = http.createServer(app);

const PORT = 3002
app.listen(PORT,()=>{
  console.log(`The App is running at http://localhost:${PORT}`)
})
