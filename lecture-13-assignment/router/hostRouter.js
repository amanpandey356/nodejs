const express = require('express')
const hostRouter = express.Router()
const hostHandler = require('../controller/hostController')

hostRouter.get('/add-home', hostHandler.getAddHome)
hostRouter.post('/add-home', hostHandler.postAddHome)
hostRouter.get('/host-home-list', hostHandler.getHostHomes)

// exports.hostRouter = hostRouter
module.exports = hostRouter
