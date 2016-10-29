const userRoutes = require("./features/User/userRoutes.js")

module.exports = app => {
	userRoutes(app);
}
