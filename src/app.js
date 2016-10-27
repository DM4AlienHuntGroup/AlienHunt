angular.module("app", ["ui.router"])
.config(function($stateProvider, $urlRouterProvider, $compileProvider){
  $compileProvider.debugInfoEnabled(true);
  $urlRouterProvider.otherwise("/");
    $stateProvider
    .state("splashPage", {
        url: "/"
      ,  templateUrl: "../public/splash.html"
      , controller: "homeCtrl"
    })
    .state("alienhunter", {
      url: "/alienhunter"
      , templateUrl: "./alienhunter.html"
    })
})
