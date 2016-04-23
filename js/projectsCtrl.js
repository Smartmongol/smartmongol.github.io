app.controller('projectsCtrl', function($scope){
	console.log("projectsCtrl");
	var currentIndex = 0;
	$scope.images = ["nuuts", "buuz", "uran", "english", "krl"];

	$scope.nextSlide = function(){
		currentIndex++;
		if(currentIndex == $scope.images.length){
			currentIndex = 0;
		}
	};

	$scope.prevSlide = function(){
		currentIndex--;
		if(currentIndex < 0){
			currentIndex = $scope.images.length - 1 ;
		}
	};

	$scope.isCurrentIndex = function(index){
		if(index == currentIndex){
			return true;
		}else{
			return false;
		}
	};
});