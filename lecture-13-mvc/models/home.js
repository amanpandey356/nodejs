//todo Core Module
const fs = require('fs')
const path = require('path')
const rootDir = require('../utils/pathUtils')

let registeredHomes = []

module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
  }
  save() {
    Home.fetchAll((registerHome) => {
      registerHome.push(this);
      //todo Here we created a file and inserted a data
      const homeDatapath = path.join(rootDir, 'data', 'homes.json')
      fs.writeFile(homeDatapath, JSON.stringify(registerHome), error => console.log("File Writing consluded", error))
    })
    // registeredHomes.push(this);
    // //todo Here we created a file and inserted a data
    // const homeDatapath = path.join(rootDir, 'data', 'homes.json')
    // fs.writeFile(homeDatapath, JSON.stringify(registeredHomes), error => console.log("File Writing consluded", error))
  }
  //! Writing static means no need to create a object of this class directly you can access by : className.methodName() === Home.fetchAll()
  static fetchAll(callback) {
    //todo here we will read a file data
    const homePath = path.join(rootDir, 'data', 'homes.json')
    fs.readFile(homePath, (err, data) => {
      console.log("File Read", err, data)
      if (!err) {
        registeredHomes = JSON.parse(data);
        callback(registeredHomes)
        return
      }
      callback([])
    })
  }
}
