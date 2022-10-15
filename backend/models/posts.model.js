const mongoose = require('mongoose');
const User = require('./users.model');
const Job = require('./jobs.model');

const postSchema = new mongoose.Schema({
    user_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    job_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job"
    }]
})

const Post = mongoose.model('Post', postSchema);

module.exports = Post;