const express = require('express')
const hostRouter = express.Router()
const hostController = require('../controller/hostController')

hostRouter.get('/add-home', hostController.getAddHome)          //! this will display the form
hostRouter.post('/add-home', hostController.postAddHome)        //! This will make you land to all host homes
hostRouter.get('/host-home-list', hostController.getHostHomes)  
hostRouter.get('/edit-home/:homeId', hostController.getEditHome)
hostRouter.post('/edit-home', hostController.postEditHome)
hostRouter.post('/delete-home/:homeId', hostController.postDeleteHome)

// exports.hostRouter = hostRouter
module.exports = hostRouter
