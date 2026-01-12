const express = require('express')
const hostRouter = express.Router()

const path = require('path')
const rootDir = require('../utils/pathUtils')

hostRouter.get('/add-home', (req, res, next)=>{
  console.log("Hey")
  // res.sendFile(path.join(__dirname, '../', 'views', 'addHome.html'))
  res.sendFile(path.join(rootDir, 'views', 'addHome.html'))
})

hostRouter.post('/add-home', (req, res, next)=>{
  // res.sendFile(path.join(__dirname, '../', 'views', 'homeAdded.html'))
  res.sendFile(path.join(rootDir, 'views', 'homeAdded.html'))
})

module.exports = hostRouter;