const scoreboardCtrl = require( "./scoreboardCtrl.js" );

module.exports = app => {
	app.get( "/api/scoreboard", scoreboardCtrl.getScoreboard );
	app.put( "/api/scoreboard", scoreboardCtrl.putScoreboard );
}
