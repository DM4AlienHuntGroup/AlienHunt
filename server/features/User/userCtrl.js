const mongoose = require( "mongoose" )
			, User = require( "./User.js" )

module.exports = {
	getUser(req, res) {
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
							return res.status(200).json(newUser);
						}
					} )
				}
				else {
					return res.status(200).json(sessionUser);
				}
			} )
		}
	},
	putUser( req, res ) {
		User.findById( {_id: req.params.id}, (err, user) => {
			if (err) {
				return res.json(err)
			}
			else {
				const tempUser = req.body;
				if (req.body.currentScore > user.highScore) {
					tempUser.highScore = req.body.currentScore
				}
				if (req.body.currentGameLvl > user.highLevel) {
					tempUser.highLevel = req.body.currentGameLvl
				}
				console.log(tempUser);
				User.findByIdAndUpdate( {_id: req.params.id}, tempUser, (err, oldUserData) => {
					if (err) {
						res.status(500).json(err)
					}
					else {
						res.status(200).json(oldUserData)
					}
				} )
			}
		} )
	}
}
