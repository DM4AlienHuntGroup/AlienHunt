angular.module( "app" )
.service( "homeService", function( $http ) {
	this.assignUser = () => {
			return $http.post(`/api/user`)
	}
} );
