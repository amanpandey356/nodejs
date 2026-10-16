const express = require('express')
const storeRouter = express.Router()
const storeController = require('../controller/storeController')

// storeRouter.get('/', homesController.getHomes)
storeRouter.get('/', storeController.getIndex)
storeRouter.get('/homes', storeController.getHomes)
storeRouter.get('/bookings', storeController.getBookings )
storeRouter.get('/favourites', storeController.getFavouriteList)

storeRouter.get('/homes/:homeId', storeController.getHomeDetail)
storeRouter.post('/favourites', storeController.postAddToFavourite)
storeRouter.post('/favourites/delete/:homeId', storeController.postRemoveFromFavourite)
storeRouter.post('/logout', storeController.postLogout)

module.exports = storeRouter
