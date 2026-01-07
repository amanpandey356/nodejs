// Core Module
const path = require('path')

// External Module
const express = require('express')
const userRouter = express.Router()

// Local Module
const rootDir = require('../utils/pathUtils')

userRouter.get("/", (req, res, next) => {
  console.log(req.url, req.method)
  // res.send(`<h1>Welcome to airbnb</h1>
  //   <a href="/host/add-home">Add Home</a>
  //   `)

  // res.sendFile(path.join(__dirname, '../', 'views', 'home.html'))

  res.sendFile(path.join(rootDir, 'views', 'home.html'))
})

module.exports = userRouter;
