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

app.use(session(serverConfig.session) );
app.use("/", express.static(__dirname));
app.use(json());
app.use(cors());
mongoose.connect(mongoUri);
masterRoutes(app)

app.listen(port, () => {console.log(`This is Dr. Crane... I'm listening. Port:${port}`)})
