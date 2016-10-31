const mongoose = require("mongoose")

const User = new mongoose.Schema({
    sessionID: {type: String, required: true, trim: true}
		, fbId: {type: String, trim: true}
})

module.exports = mongoose.model('User', User)
