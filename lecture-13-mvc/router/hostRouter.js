//todo External module
const express = require('express')
const hostRouter = express.Router();

//todo : Importing from controller : local module
// const { getAddHome } = require('../controllers/home')
const homeHandler = require('../controllers/home')

hostRouter.get('/add-home', homeHandler.getAddHome )

// const registeredHomes = []
hostRouter.post('/add-home', homeHandler.postAddHome)

// exports.registeredHomes = registeredHomes
exports.hostRouter = hostRouter
