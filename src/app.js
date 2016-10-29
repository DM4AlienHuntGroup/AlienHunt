angular.module( "app", [ "ui.router" ] )
.config( ( $stateProvider, $urlRouterProvider, $compileProvider ) => {
	$compileProvider.debugInfoEnabled( true );
	$urlRouterProvider.otherwise( "/" );
	$stateProvider
	.state( "splashPage", {
		url: "/"
	, template: "<splash-page></splash-page>"
	, controller: "homeCtrl"
	} )
	.state( "alienhunter", {
		url: "/alienhunter"
	, templateUrl: "./alienhunter.html"
	} );
} )
