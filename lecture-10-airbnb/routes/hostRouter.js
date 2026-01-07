// Core module
const path = require('path')

// External Module
const express = require('express')
const hostRouter = express.Router()

// Local Module
const rootDir = require('../utils/pathUtils')

hostRouter.get("/add-home",(req, res, next)=>{
  // res.send(`<h1>Register Your Home Here</h1>
  //   <form action="/host/add-home" method="POST">
  //   <input type="text" name="housename" placeholder="Enter Your name of the house" />
  //   <input type="submit" />
  //   </form>
  //   `)

  // res.sendFile(path.join(__dirname, '../', 'views', 'addHome.html'))

  res.sendFile(path.join(rootDir, 'views', 'addHome.html'))
})


hostRouter.post("/add-home",(req, res, next)=>{
  console.log(req.body)
  // res.send(`<h1>Home Registered Successfully</h1>
  //   <a href="/"> Go To Home </a>
  //   `)

  res.sendFile(path.join(rootDir, 'views', 'homeAddesd.html' ))
  })
module.exports = hostRouter;