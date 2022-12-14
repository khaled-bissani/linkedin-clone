const User = require('../models/users.model');
const jwt = require('jsonwebtoken');

const authMiddelware = async(req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];

    if(!token) return res.status(401).json({message: "Unauthorized"});
    try{
        const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const user = await User.findOne({email: decode.email}).lean();
        req.user= {user};
        next();
    }
    catch(err) {
        return res.status(401).json({message: "Unauthorized"});
    }
}

module.exports = authMiddelware;