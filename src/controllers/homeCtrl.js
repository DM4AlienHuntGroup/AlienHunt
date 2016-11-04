import play from "../Components/play.js"
function homeCtrl( $scope, homeService ) {
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


	$scope.play = () => {		play();
	}

	getUser()
}
export default homeCtrl;
