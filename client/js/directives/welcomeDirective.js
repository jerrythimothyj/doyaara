(function(angular){
	'use strict';
	angular.module('doyaara')
			.directive('welcome', () => {
				return {
					restrict: 'E',
					templateUrl: './client/views/components/welcome.html',
				}
			});


})(window.angular);