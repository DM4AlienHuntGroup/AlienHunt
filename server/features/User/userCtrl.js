const mongoose = require( "mongoose" )
			, User = require( "./User.js" )

module.exports = {
	assignUser: ( req, res ) => {
		if (req.user) {
			User.findOne({fbId: req.user.id}, (err, suc) => {
				if (!suc) {
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
					return res.status(200).json(suc);
				}
			})
		}
		else {
			User.findOne( { sessionID: req.sessionID }, (err, suc) => {
				if (!suc) {
					new User( { sessionID: req.sessionID } )
					.save( (err, newUser) => {
						if (err) {
							return res.status(500).json(err);
						}
						else {
							req.user = newUser
							req.user.id = newUser._id
							return res.status(200).json(newUser);
						}
					} )
				}
				else {
					return res.status(200).json(suc)
				}
			})
		}
	}
}
