const Follow = require('../models/follows.model')

const followCompany = async(req, res) => {
    const {user_id, following_id} = req.body;
    
    const follow = new Follow();
    follow.user_id = user_id;
    follow.following_id = following_id;

    await follow.save();
    res.status(200).json({message: "Followed"})
}

module.exports = followCompany;