const express = require('express')
const userRouter = express.Router()
const homeHandler = require('../controllers/home')

userRouter.get('/', homeHandler.getHomes)

module.exports = userRouter