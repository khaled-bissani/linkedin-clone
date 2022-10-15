const mongoose = require('mongoose');
const User = require('./users.model');

const followSchema = new mongoose.Schema({
    user_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    following_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
})

const Follow = mongoose.model('Follow', followSchema);

module.exports = Follow;