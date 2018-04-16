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
