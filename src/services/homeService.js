angular.module( "app" )
.service( "homeService", function( $http ) {
	this.createUser = () => {
			return $http.post(`/api/user`)
	}
} );
