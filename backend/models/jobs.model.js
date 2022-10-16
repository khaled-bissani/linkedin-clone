const mongoose = require('mongoose');

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
    }
})

jobSchema.index({'$**': 'text'});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;