const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: 'full name is required'
    },
    last_name: {
        type: String,
        required: 'last name is required'
    },
    email: {
        type: String,
        required: 'email is required',
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: 'password is required',
        select: false
    },
    phone_number: {
        type: String,
    },
    country: {
        type: String
    },
    city: {
        type: String
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User;