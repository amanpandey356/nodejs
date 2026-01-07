// Core Module
const path = require('path')

// External module
const express = require('express')

// Internal Module
const dummyRouter = require('./routes/dummyRoutes')
const homeRoute = require('./routes/homeRoute')
const contactRouter = require('./routes/contactRoute')
const rootDir = require('./utils/pathUtils')

const app = express()

// creating middleware
// app.use((req, res, next)=>{
//   console.log("Hey I am running successfully")
//   res.sendFile(path.join(__dirname, './', 'views', '404.html'))
// })

app.use(express.urlencoded())

app.use(dummyRouter)
app.use(homeRoute)
app.use(contactRouter)
app.use((req, res, next)=>{
  // res.status(404).sendFile(path.join(__dirname, './', 'views', '404.html'))
  res.status(404).sendFile(path.join(rootDir, './', 'views', '404.html'))
})

// Running Server
const PORT = 3000
app.listen(PORT, ()=>{
  console.log(`your application running on http://localhost:${PORT}`)
})