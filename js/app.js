var app = angular.module('smartmongol', ['ui.router']);
app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/home");
	$stateProvider
	    .state('home', {
	      url: "/home",
	      templateUrl: "view/home.html",
	      controller:"homeCtrl"
	    })
	    .state('team', {
	      url: "/team",
	      templateUrl: "view/team.html"
	    })
	    .state('projects', {
	      url: "/projects",
	      templateUrl: "view/projects.html",
	      controller: "projectsCtrl"
	    })
	    .state('contact', {
	      url: "/contact",
	      templateUrl: "view/contact.html",
	      controller: "contactCtrl"
	    });
});