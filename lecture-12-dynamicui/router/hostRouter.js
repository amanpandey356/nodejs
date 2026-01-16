const path = require('path')
const express = require('express');
const hostRouter = express.Router()
const globalPath = require('../utils/pathUtils')

hostRouter.get('/add-home', (req, res, next)=>{
  // res.sendFile(path.join(globalPath, 'views', 'addHome.html'))
  res.render('addHome', {pageTitle: "Register Home"})
})

const registeredHomes = [];

hostRouter.post('/add-home', (req, res, next)=>{
  // console.log("Home Regisered Successfullu", req.body.housename)
  registeredHomes.push({ houseName: req.body.housename })
  // res.sendFile(path.join(globalPath, 'views', 'homeAdded.html'))
  res.render('homeAdded', {pageTitle: 'Home Registered Successfully'})
})

//! THis is single export you can't export any other things hence don't do single export
// module.exports = hostRouter

exports.hostRouter = hostRouter
exports.registeredHomes = registeredHomes