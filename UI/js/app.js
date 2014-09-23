var app = angular.module('contactLogApp', ['ngRoute', 'contactLogControllers']);

app.config(['$routeProvider',
	function($routeProvider){
		$routeProvider.
			when('/home', {
				templateUrl: 'partials/home.html',
				controller: 'homeCtrl'
			}).
			otherwise({
				redirectTo: '/home'
			});
	}]);