const express = require('express')
const hostRouter = express.Router();

hostRouter.get('/add-home', (req, res, next)=>{
  res.render('addHome', {pageTitle:"Register Your Home"})
})

const registeredHomes = []

hostRouter.post('/add-home', (req, res, next)=>{
  console.log(req.body)
  registeredHomes.push({ houseName: req.body.housename, price: req.body.price, location: req.body.location, rating: req.body.rating, photoUrl: req.body.photoUrl })
  res.render('homeAdded', {registeredHomes, pageTitle:"Home Registered Successfully"})
})

exports.registeredHomes = registeredHomes
exports.hostRouter = hostRouter
