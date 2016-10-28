const express = require("express")
      , {json} = require("body-parser")
      , cors = require("cors")
      , serverConfig = require("./server/serverConfig.js")
      , port = serverConfig.port || 4000
      , app = express()
      , session = require('express-session')

app.use(session({
  secret: serverConfig.secret
  , resave: null
  , saveUninitialized: null
} ) );
app.use("/", express.static(__dirname));
app.use(json());
app.use(cors());

app.listen(port, () => {console.log(`This is Dr. Crane... I'm listening. Port:${port}`)})
