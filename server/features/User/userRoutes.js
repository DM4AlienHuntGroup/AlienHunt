const userCtrl = require( "./userCtrl.js" );

module.exports = app => {
	app.route( "/api/User/:id" )
	.get( userCtrl.getUser )
}
