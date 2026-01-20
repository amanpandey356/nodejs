const express = require('express')
const userRouter = express.Router()
const { registeredHomes } = require('./hostRouter')

userRouter.get('/', (req, res, next)=>{
  res.render('home', {registeredHomes, pageTitle: 'Home Page', currentPage: 'Home'})
})

module.exports = userRouter
