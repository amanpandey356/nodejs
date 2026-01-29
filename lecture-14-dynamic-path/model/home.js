//! Importing core modules
const fs = require('fs')
const path = require('path')
const rootDir = require('../utils/pathUtils')
const Favourite = require('./favourite')

let registeredHomes = []
const homeDatapath = path.join(rootDir, 'data', 'homes.json')

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
      if(this.id){
        registeredHomes = registeredHomes.map(home => home.id===this.id ? this : home)
      }else{
        this.id = Math.random().toString()
        registeredHomes.push(this)
      }
      // registeredHomes.push(this)
      // let homeDatapath = path.join(rootDir, 'data', 'homes.json')
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
    // let homeDatapath = path.join(rootDir, 'data', 'homes.json')
    fs.readFile(homeDatapath, (err, data) => {
      if (!err) {
        registeredHomes = JSON.parse(data)
        callback(registeredHomes)
        return
      }
      callback([])
    })
  }

  static fetchById(homeId, callback){
    Home.fetchAll(homes=>{
      const homeFound = homes.find(home=>home.id === homeId);
      callback(homeFound);
    })
  }

  static deleteById(homeId, callback) {
    Home.fetchAll(homes=>{
      homes = homes.filter(home=>home.id !== homeId)
      fs.writeFile(homeDatapath, JSON.stringify(homes), error=>{
        Favourite.deleteById(homeId, callback)
      })
    })
  }
}
