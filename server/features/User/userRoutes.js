const userCtrl = require( "./userCtrl.js" );

module.exports = app => {
	app.route( "/api/user/:id" )
		.get( userCtrl.getUser )
	app.route( "/api/user" )
		.post( userCtrl.postUser )
}
