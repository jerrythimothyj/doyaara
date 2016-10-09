(function(angular){
	'use strict';
	angular.module('doyaara')
			.directive('facebook', () => {
				return {
					restrict: 'E',
					templateUrl: './client/views/components/facebook.html',
					controller: 'facebookController'
				}
			});


})(window.angular);