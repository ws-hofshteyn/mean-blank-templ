(function() {
	'use strict';

	angular
		.module('BlankApp', [
			'ngMaterial',
			'ngMessages',
			'ui.router'
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
						templateUrl: 'app/main.html'
					},
					'navbar@home': {
						templateUrl: "app/navbar/navbar.html",
						controller: 'NavCtrl',
						controllerAs: 'navbar'
					},
					'dashboard@home': {
						templateUrl: "app/dashboard/dashboard.html",
						controller: 'DashboardCtrl',
						controllerAs: 'dashboard'
					}
				}
			});
			$stateProvider
				.state('home.dashboard', {
					url:'/',
					templateUrl: 'app/main.html'
				});
	}

})();

//example controller

(function () {

	function DashboardCtrl () {

		let vm = this;

		angular.extend(vm, {
            title: 'MEAN Stack App',
            components: [ 
                'Express',
                'Node JS',
                'MongoDB',
                'Angular',
                'Bootstrap',
                'Angular-material',
                'Gulp'
            ]
		});

	}

	angular
		.module('BlankApp')
		.controller('DashboardCtrl', DashboardCtrl);

	DashboardCtrl.$inject = [];

})();

//example controller

(function () {

	function NavCtrl () {

		let vm = this;

		angular.extend(vm, {
			title: 'Mean stack example'
		});

	}

	angular
		.module('BlankApp')
		.controller('NavCtrl', NavCtrl);

	NavCtrl.$inject = [];

})();
