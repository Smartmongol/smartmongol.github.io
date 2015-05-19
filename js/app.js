var app = angular.module('smartmongol', ['ui.router', 'ngMaterial']);
app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/home");
	$stateProvider
	    .state('home', {
	      url: "/home",
	      templateUrl: "view/home.html",
	      controller:"homeCtrl"
	    })
	    .state('members', {
	      url: "/members",
	      templateUrl: "view/members.html"
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