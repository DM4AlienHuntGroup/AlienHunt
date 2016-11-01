angular.module( "app" )
.service( "homeService", function( $http ) {
	this.getUser = () => {
		return $http.get("/api/user")
	}
	this.updateUser = (id, update) => {
		return $http.put(`/api/user/${id}`, update)
	}
} );
