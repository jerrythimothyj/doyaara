(function(angular){
	'use strict';
	angular.module('doyaara')
			.directive('youtube', () => {
				return {
					restrict: 'E',
					templateUrl: './client/views/components/youtube.html',
					controller: 'youtubeController'
				}
			});


})(window.angular);