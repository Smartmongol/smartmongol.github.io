var app = angular.module('smartmongol', ['ngRoute', 'ngMaterial']);
app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl:'view/main.html',
		controller:'mainCtrl'
	});
});

app.controller('mainCtrl', function($scope){
	console.log('mainCtrl');
});