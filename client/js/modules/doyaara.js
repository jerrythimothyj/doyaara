(function(angular) {
  'use strict';
angular.module('doyaara', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    
        $urlRouterProvider.otherwise("/home");
    
        $stateProvider
        .state('home', {
          url: "/home",
          templateUrl: "./client/views/pages/home.html",
          controller: 'homeController'
        })
    })
})(window.angular);