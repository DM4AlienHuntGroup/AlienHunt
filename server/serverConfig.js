module.exports = {
   mongoUri: "mongodb://localhost:27017/alien-hunt"
   , session: {
       secret: "z1ThRTXL1001FrV972DA1440T37d66PF"
       , resave: null
       , saveUninitialized: null
   }
   , Strategy: {
       clientID: "307251052994422",
       clientSecret: "f75c6e8233fec5d4b482e90ab70487ff",
       callbackURL: "http://localhost:4000/auth/facebook/callback"
   }
};
