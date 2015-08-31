'use strict';

/**
 * @ngdoc function
 * @name parkerBarkerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the parkerBarkerApp
 */
angular.module('parkerBarkerApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = [];
    $scope.addTodo = function () {
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };
    $scope.removeTodo = function (index) {
      $scope.todos.splice(index, 1);
    };
  });
