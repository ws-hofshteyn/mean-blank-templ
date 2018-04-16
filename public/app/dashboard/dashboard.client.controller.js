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
