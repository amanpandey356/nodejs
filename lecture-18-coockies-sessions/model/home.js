// const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
// const Favourite = require('./favourite');
const favourite = require('./favourite');

const homeSchema = mongoose.Schema({
  houseName: {type: String, required: true},
  price: {type: Number, required: true},
  location: {type: String, required: true},
  rating: {type: Number, required: true},
  photoUrl: String,
  description: String,
})

homeSchema.pre('findOneAndDelete', async function() {
  const homeId = this.getQuery()._id;
  await favourite.deleteMany({houseId: homeId});
  console.log("Delete From Favourite")
  // next()
} )

module.exports = mongoose.model('Home', homeSchema)

