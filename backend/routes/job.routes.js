const {Router} = require('express');
const {createJob} = require('../controllers/job.controller');
const router = Router();

router.post('/create_job', createJob);

module.exports= router;