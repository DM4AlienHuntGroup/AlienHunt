const mongoose = require("mongoose")

const Scoreboard = new mongoose.Schema({
    	userName: {type: String, trim: true}
		, score: {type: Number}
		, place: {type: Number}
})

module.exports = mongoose.model('Scoreboard', Scoreboard)
