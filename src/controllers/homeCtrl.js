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


	$scope.play = () => {
// <<<<<<< HEAD
// 		// =======
		play();
	}
// >>>>>>> ea5048d69926f288203f7f5d8e84d69b19e0f822
	getUser()
}
export default homeCtrl;
