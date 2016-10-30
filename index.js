const express = require("express")
      , {json} = require("body-parser")
      , cors = require("cors")
      , serverConfig = require("./server/serverConfig.js")
      , port = serverConfig.port || 4000
      , app = express()
      , session = require('express-session')
			, mongoose = require("mongoose")
			, mongoUri = serverConfig.mongoUri
			, masterRoutes = require("./server/masterRoutes.js")
			, passport = require("passport")
			, Strategy = require('passport-facebook').Strategy

app.use(session(serverConfig.session) );
app.use("/", express.static(__dirname));
app.use(passport.initialize());
app.use(passport.session());
app.use(json());
app.use(cors());
mongoose.connect(mongoUri);
masterRoutes(app)

passport.use(new Strategy( serverConfig.Strategy ,
	function(accessToken, refreshToken, profile, cb) {
    return cb(null, profile);
  }));

app.get("/auth/facebook", passport.authenticate("facebook"));
app.get("/auth/facebook/callback", passport.authenticate("facebook", {
  successRedirect: "/",
  failureRedirect: "/login"
}));
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

app.listen(port, () => {console.log(`This is Dr. Crane... I'm listening. Port:${port}`)})
