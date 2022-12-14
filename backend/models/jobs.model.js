const mongoose = require('mongoose');
const User = require('../models/users.model');

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: 'title is required'
    },
    company_name: {
        type: String,
        required: 'company name is required'
    },
    workplace: {
        type: String,
        required: 'workplace is required'
    },
    location: {
        type: String,
        required: 'location is required'
    },
    employment: {
        type: String,
        required: 'employment is required'
    },
    description: {
        type: String,
        required: 'description is required'
    },
    user_id: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
})

jobSchema.index({'$**': 'text'});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;