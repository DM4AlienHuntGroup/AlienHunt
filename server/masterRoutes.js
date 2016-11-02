const 	userRoutes = require("./features/User/userRoutes.js")
			, scoreboardRoutes = require("./features/Scoreboard/scoreboardRoutes.js")

module.exports = app => {
	userRoutes(app);
	scoreboardRoutes(app);
}
