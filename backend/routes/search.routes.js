const {Router} = require('express');
const searchJob = require('../controllers/search.controller');
const router = Router();

router.get('/search:search_job', searchJob);

module.exports= router;