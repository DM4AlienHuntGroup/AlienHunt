const mongoose = require( "mongoose" )
			, User = require( "./User.js" )

module.exports = {
	postUser: ( req, res ) => {
		if (!req.user) {
			new User( { sessionID: req.sessionID } )
			.save( (err, newUser) => {
			  if (err) {
			    return res.status(500).json(err);
			  }
			  else {
			    return res.status(200).json(newUser);
				}
			} )
		}
		else {
			User.find({fbId: req.user.id})
		}
	}
}
