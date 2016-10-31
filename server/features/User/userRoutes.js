const userCtrl = require( "./userCtrl.js" );

module.exports = app => {
	app.post( "/api/user", (req, res, next) =>{console.log(req.user); next();}, userCtrl.postUser )
}
