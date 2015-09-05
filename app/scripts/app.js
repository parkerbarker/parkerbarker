'use strict';

/**
 * @ngdoc overview
 * @name parkerBarkerApp
 * @description
 * # parkerBarkerApp
 *
 * Main module of the application.
 */
angular
  .module('parkerBarkerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .when('/parker', {
        templateUrl: 'views/parker.html',
        controller: 'ParkerCtrl',
        controllerAs: 'parker'
      })
      .when('/barker', {
        templateUrl: 'views/barker.html',
        controller: 'BarkerCtrl',
        controllerAs: 'barker'
      })
      .otherwise({
        redirectTo: '/'
      });

      if(window.history && window.history.pushState){
        $locationProvider.html5Mode(true);
      }
  });
