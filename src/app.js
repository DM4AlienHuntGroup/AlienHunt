import jquery from "jquery";
import angular from "angular";
import uiRouter from "angular-ui-router";
import homeCtrl from "./controllers/homeCtrl.js";
import homeService from "./services/homeService.js";
import playService from "./Components/play.js";
import splashPageDirective from "../public/directives/splashPageDirective.js";
import splashTmpl from "../public/splash.html";
import howler from "../howler.js";
import modal from "../src/assets/modal.js";

angular
  .module( "app", [ "ui.router" ] )
  .service( "homeService", homeService )
  .service( "playService", playService )
  .directive( "splashPage", splashPageDirective )
  .config( ( $stateProvider, $urlRouterProvider, $compileProvider ) => {
    $compileProvider.debugInfoEnabled( true );
    $urlRouterProvider.otherwise( "/" );
    $stateProvider.state( "splashPage", {
      url: "/"
      , template: "<splash-page></splash-page>"
      , controller: homeCtrl
    } );
  } );
