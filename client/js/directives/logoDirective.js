(function(angular){
	'use strict';
	angular.module('doyaara')
			.directive('logo', () => {
				return {
					restrict: 'E',
					templateUrl: './client/views/components/logo.html',
					controller: 'logoController'
				}
			});


})(window.angular);