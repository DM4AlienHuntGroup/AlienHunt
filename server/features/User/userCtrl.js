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
		new User( { sessionID: req.sessionID } )
		.save( (err, newUser) => {
	    if (err) {
	      return res.status(500).json(err);
	    }
	    else {
				console.log( newUser );
	      return res.status(200).json(newUser);
	  	}
		} )
	}
}
