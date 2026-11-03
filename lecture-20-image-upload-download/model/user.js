const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    firstName: {
       type: String,
       required: [true, 'first Name is required']
    },
    lastName: String,
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        match: [/\S+@\S+\.\S+/, 'Please enter a valid email address']
    },
    userType: {
        type: String,
        enum: ['guest', 'host'],
        required: [true, 'User type is required'],
        default: 'guest'
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [8, 'Password must be at least 8 characters long']
    },
    favourites: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Home'
    }]
}
);

module.exports = mongoose.model("User", userSchema)