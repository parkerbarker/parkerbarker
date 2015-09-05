'use strict';

/**
 * @ngdoc service
 * @name parkerBarkerApp.barkerProjects
 * @description
 * # barkerProjects
 * Service in the parkerBarkerApp.
 */
angular.module('parkerBarkerApp')
  .service('barkerProjects', function ($http) {
    return $http.get('https://raw.githubusercontent.com/parkerbarker/parkerbarker/master/app/data/projects.json')
       .success(function(data) {
         return data;
       })
       .error(function(data) {
         return data;
       });
    // AngularJS will instantiate a singleton by calling "new" on this function
  });
