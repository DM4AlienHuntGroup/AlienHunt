const mongoose = require( "mongoose" )
			, User = require( "./User.js" )

module.exports = {
	getUser: (req, res) => {
		User.find(req.params.id, (err, user) => {
			if (err) {res.status(500).json(err)}
			else {
				res.status(200).json(user)
			}
		})
	},
	postUser: ( req, res ) => {
		console.log( req.body );
	}
}
