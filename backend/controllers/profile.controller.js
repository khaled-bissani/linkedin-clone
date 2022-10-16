const User = require('../models/users.model');

const editProfile = async (req, res) => {
    const {first_name, last_name, email, phone_number, country, city} = req.body
    User.findOneAndUpdate(email,{
        first_name: first_name,
        last_name: last_name,
        phone_number: phone_number,
        country: country,
        city: city
    })
    .then((user)=>res.send(user))
    .catch((err)=>res.status(400).send(err))
}

module.exports = editProfile;