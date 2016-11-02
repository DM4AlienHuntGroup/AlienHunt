const mongoose = require( "mongoose" ) 
			, User = require( "./User.js" )

module.exports = {
	getUser: (req, res) => {
		if (req.user) {
			User.findOne( {fbId: req.user.id}, (err, fbUser) => {
				if (!fbUser) {
					new User( {
						fbId: req.user.id
						, firstName: req.user.displayName.split(' ')[0]
						, lastName: req.user.displayName.split(' ')[1]
					} )
					.save( (err, newFbUser) => {
						if (err) {
							return res.status(500).json(err);
						}
						else {
							return res.status(200).json(newFbUser);
						}
					} )
				}
				else {
					return res.status(200).json(fbUser)
				}
			})
		}
		else {
			User.findOne( { sessionID: req.sessionID }, (err, sessionUser) => {
				if (!sessionUser) {
					new User( { sessionID: req.sessionID, isLoggedIn: false } )
					.save( (err, newUser) => {
						if (err) {
							return res.status(500).json(err);
						}
						else {
							return res.status(200).json(sessionUser);
						}
					} )
				}
				else {
					return res.status(200).json(sessionUser);
				}
			} )
		}
	},
	putUser: ( req, res ) => {
		User.findByIdAndUpdate( {_id: req.params.id}, req.body, (err, oldUserData) => {
			if (err) {
				res.status(500).json(err)
			}
			else {
				res.status(200).json(oldUserData)
			}
		} )
	}
}
