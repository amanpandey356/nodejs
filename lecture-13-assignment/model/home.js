//! Importing core modules
const fs = require('fs')
const path = require('path')
const rootDir = require('../utils/pathUtils')

let registeredHomes = []

module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl) {
    this.houseName = houseName
    this.price = price
    this.location = location
    this.rating = rating
    this.photoUrl = photoUrl
  }

  save() {
    Home.fetchAll((registeredHomes) => {
      registeredHomes.push(this)
      let homeDatapath = path.join(rootDir, 'data', 'homes.json')
      fs.writeFile(homeDatapath, JSON.stringify(registeredHomes), (error) => {
        if (error) {
          console.log('Error Writing File ', error)
        } else {
          console.log('File Written Successfully')
        }
      })
    })
  }

  static fetchAll(callback) {
    let homeDatapath = path.join(rootDir, 'data', 'homes.json')
    fs.readFile(homeDatapath, (err, data) => {
      if (!err) {
        registeredHomes = JSON.parse(data)
        callback(registeredHomes)
        return
      }
      callback([])
    })
  }
}
