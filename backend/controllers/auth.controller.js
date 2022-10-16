const User = require('../models/users.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async(req,res) => {
    const {email, password} =req.body;

    const user = await User.findOne({email}).select("+password");

    if(!user) return res.status(404).json({message: "Wrong email or password"});

    const matchPassword= bcrypt.compare(password, user.password);
    if(!matchPassword) return res.status(404).json({message: "Wrong email or password"});

    const token = jwt.sign({
        id:user.id,
        first_name: user.first_name,
        last_name:user.last_name, 
        email:user.email, 
        phone_number:user.phone_number, 
        country:user.country, 
        city:user.city, 
        user_type:user.user_type}, 
        process.env.JWT_SECRET_KEY, 
        {expiresIn: '2h'});
    res.status(200).json(token);
}

const signup = async(req,res) => {
    const {first_name, last_name, email, password, phone_number, country, city, user_type}=req.body;
    try{
        const user = new User();
        user.first_name= first_name;
        user.last_name=last_name;
        user.email=email;
        user.password= await bcrypt.hash(password,6);
        user.phone_number=phone_number;
        user.country=country;
        user.city=city;
        user.user_type=user_type;

        await user.save();
        res.send(user);
    }
    catch(err){
        res.status(400).json({
            message: err.message
        })
    }
}

module.exports={
    login,
    signup
}