const path = require('path')
const express = require('express')
const userRouter = express.Router()
const globalPath = require('../utils/pathUtils')
const { registeredHomes } = require('./hostRouter')

userRouter.get('/', (req, res, next)=>{
  console.log(registeredHomes);
  // res.sendFile(path.join(globalPath, 'views', 'home.html'))
  res.render('home', {registeredHomes, pageTitle: "Home Page"})
})

module.exports = userRouter