const { ObjectId } = require("mongodb");
const { getDB } = require("../utils/databaseUtil");


module.exports = class Favourite {
  constructor(houseId) {
    console.log("Let's check the houseId ",houseId)
    this.houseId = houseId;
  }

  //! Here We Are Adding To Favourites
  save(){
    const db = getDB()
    // return db.collection('favourites').insertOne(this)
    return Favourite.getFavourites().then(allFavourites=>{
      allFavourites = allFavourites.map(fav=>fav.houseId)
      if(!allFavourites.includes(this.houseId)){
        return db.collection('favourites').insertOne(this)
      }
      return new Promise.resolve();
    })
  }

  //! Here We Will Getting our favourites
  static getFavourites() {
    const db = getDB()
    return db.collection('favourites').find().toArray()
  }

  //! Here We Will Deleting From Favourites
  static deleteById(delHomeId) {
    console.log(delHomeId)
    const db = getDB();
    return db.collection('favourites').deleteOne({houseId: delHomeId})
  }
}