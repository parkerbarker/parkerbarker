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
    $scope.skillsLoading = true;
    barkerSkills.success(function(data) {
      $scope.skills = data;
      $scope.skillsLoading = false;
    });
    $scope.projectsLoading = true;
    barkerProjects.success(function(data) {
      $scope.projects = data;
      $scope.projectsLoading = false;
    });

  });
