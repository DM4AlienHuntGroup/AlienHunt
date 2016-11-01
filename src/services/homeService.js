angular.module( "app" )
.service( "homeService", function( $http ) {
	this.getUser = () => {
		return $http.get("/api/user")
	}
} );
