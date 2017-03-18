import playService from "../Components/play.js"
function homeCtrl( $scope, homeService, playService ) {
	const getUser = () => {
		homeService.getUser().then((response)=>{
			$scope.options = true;
			$scope.user = response.data
		})
	}

	$scope.getScoreboard = () => {
			homeService.getScoreboard().then( ( response ) => {
			$scope.scores = response.data
		})
	}

	$scope.play = (user) => {
		playService.play(user);
	}

	getUser();
}
export default homeCtrl;
