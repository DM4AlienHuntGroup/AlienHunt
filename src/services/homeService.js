function homeService ( $http ) {
	this.getUser = () => {
		return $http.get("/api/user")
	}
	this.updateUser = (id, update) => {
		return $http.put(`/api/user/${id}`, update)
	}
	this.getScoreboard = () => {
		return $http.get(`/api/scoreboard`)
	}
}
export default homeService;
