// External Module
const express = require('express');

// Core Module
const path = require('path')

// Internal Module
const rootDir = require('../utils/pathUtils')

const homeRoute = express.Router()

homeRoute.get('/',(req, res, next)=>{
  // res.sendFile(path.join(__dirname, '../', 'views', 'home.html'))
  res.sendFile(path.join(rootDir, 'views', 'home.html'))
})

module.exports = homeRoute