'use strict';

/**
 * @ngdoc function
 * @name parkerBarkerApp.controller:BarkerCtrl
 * @description
 * # BarkerCtrl
 * Controller of the parkerBarkerApp
 */
angular.module('parkerBarkerApp')
  .controller('BarkerCtrl', function ($scope, barkerProjects, barkerSkills) {
    barkerProjects.success(function(data) {
      $scope.projects = data;
    });
    barkerSkills.success(function(data) {
      $scope.skills = data;
    });
  });
