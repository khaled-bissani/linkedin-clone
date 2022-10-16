const Job = require('../models/jobs.model');

const searchJob = async(req, res) => {
    const search_job=req.params;

    const results = await Job.find({ $text: { $search: search } });
    res.json(results)
}

module.exports = searchJob;