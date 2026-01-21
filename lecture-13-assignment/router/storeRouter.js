const express = require('express')
const storeRouter = express.Router()
const homesController = require('../controller/storeController')

// storeRouter.get('/', homesController.getHomes)
storeRouter.get('/', homesController.getIndex)
storeRouter.get('/homes', homesController.getHomes)
storeRouter.get('/bookings', homesController.getBookings )
storeRouter.get('/favourites', homesController.getFavouriteList)

module.exports = storeRouter
