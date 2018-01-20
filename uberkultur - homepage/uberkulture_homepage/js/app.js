var scriptoriumWebapp = angular.module('scriptoriumWebapp', [
	//angularjs built-in modules
	'ngRoute'

	//3rd party modules

	//core modules
	//'apiService',
	//'webappConfig'
]);

scriptoriumWebapp.config(function($routeProvider){
	$routeProvider.when("/", {
		templateUrl : "partials/landing-page.html",
	})
});