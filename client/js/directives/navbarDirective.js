(function(angular){
	'use strict';
	angular.module('doyaara')
			.directive('navbar', () => {
				return {
					restrict: 'E',
					templateUrl: './client/views/components/navbar.html',
					controller: 'navbarController'
				}
			});


})(window.angular);