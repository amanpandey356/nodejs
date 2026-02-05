//! Rest all the function like get edit it will give no need to write
const mongoose = require('mongoose');

const favouriteSchema = mongoose.Schema({
  houseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Home',
    required: true,
    unique: true
  }
})

module.exports = mongoose.model('Favourite', favouriteSchema)