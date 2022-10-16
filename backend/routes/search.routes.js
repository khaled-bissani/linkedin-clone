const {Router} = require('express');
const searchJob = require('../controllers/search.controller');
const router = Router();

router.post('/search_job', searchJob);

module.exports= router;