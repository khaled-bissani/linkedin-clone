const Job = require('../models/jobs.model');
const { search } = require('../routes/auth.routes');

const searchJob = async(req, res) => {
    const data = req.body;
    
    const results = await Job.find({ $text: { $search: data.job } });
    res.json(results)
}

module.exports = searchJob;