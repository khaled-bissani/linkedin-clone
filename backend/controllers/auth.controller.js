const User = require('../models/users.model');
const bcrypt = require('bcrypt');

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