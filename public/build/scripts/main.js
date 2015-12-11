(function() {
	'use strict';

	angular
		.module('blankApp', [
			'ui.router',
			'ngMaterial',
			'ngAnimate',
			'ngAria'
		])
		.config(config);

	function config($urlRouterProvider, $stateProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('home', {
				abstract: true,
				breadCrumb: {
					exclude: true
				},
				views: {
					'': {
						templateUrl: 'views/core/main.html'
					},
					'navbar@home': {
						templateUrl: "views/core/navbar.html",
						controller: 'NavCtrl'
					}
				}
			});
			$stateProvider
				.state('home.dashboard', {
					url:'/',
					templateUrl: 'views/core/main.html'
				});
	}

})();

//example controller

(function () {

	function NavCtrl () {}

	angular
		.module('blankApp')
		.controller('NavCtrl', NavCtrl);

	NavCtrl.$inject = [];

})();
