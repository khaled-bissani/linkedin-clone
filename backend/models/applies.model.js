const mongoose = require('mongoose');
const User = require('./users.model');
const Job = require('./jobs.model');

const applySchema = new mongoose.Schema({
    user_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    job_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Job"
    }]
})

const Apply = mongoose.model('Apply', applySchema);

module.exports = Apply;