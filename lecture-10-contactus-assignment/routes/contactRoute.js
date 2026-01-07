// external module
const express = require('express')

// core module
const path = require('path')

//Internal Module
const rootDir = require('../utils/pathUtils')

const contactRouter = express.Router()

contactRouter.get('/contact-us', (req, res, next)=>{
  // res.sendFile(path.join(__dirname, '../', 'views', 'contact.html'))
  res.sendFile(path.join(rootDir, 'views', 'contact.html'))
})

contactRouter.post('/contact-us', (req, res, next)=>{
  // res.sendFile(path.join(__dirname, '../', 'views', 'submit.html'))
  console.log(req.body)
  res.sendFile(path.join(rootDir, 'views', 'submit.html'))
})

module.exports = contactRouter