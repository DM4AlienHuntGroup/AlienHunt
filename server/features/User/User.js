const mongoose = require("mongoose")

const User = new mongoose.Schema({
    sessionID: {type: String, trim: true}
		, fbId: {type: String, trim: true}
		, highScore: {type: Number, default: 0, trim: true}
		, highLevel: {type: Number, default: 0, trim: true}
		, currentGameLvl: {type: Number, default: 0, trim: true}
		, firstName: {type: String, trim: true, default: "John"}
		, lastName: {type: String, trim: true, default: "Doe"}
		, isLoggedIn: {type: Boolean, default: true}
		, currentScore: {type: Number, default: 0}

})

module.exports = mongoose.model('User', User)
