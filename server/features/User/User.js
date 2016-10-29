const mongoose = require("mongoose")

const User = new mongoose.Schema({
    sessionID: {type: String, required: true}
})

module.exports = mongoose.model('User', User)
