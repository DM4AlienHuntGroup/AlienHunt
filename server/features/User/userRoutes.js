const userCtrl = require( "./userCtrl.js" );

module.exports = app => {
	app.get( "/api/user", userCtrl.getUser );
}
