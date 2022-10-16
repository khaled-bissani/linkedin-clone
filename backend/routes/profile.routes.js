const {Router} = require('express');
const {editProfile} = require('../controllers/profile.controller');
const router = Router();

router.put('/profile', editProfile);

module.exports= router;