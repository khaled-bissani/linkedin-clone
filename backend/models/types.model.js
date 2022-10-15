const mongoose = require('mongoose');

const typeSchema = new mongoose.Schema({
    user_type: {
        type: String
    }
})

const Type = mongoose.model('Type', typeSchema);

module.exports = Type;