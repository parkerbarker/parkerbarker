'use strict';

/**
 * @ngdoc function
 * @name parkerBarkerApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the parkerBarkerApp
 */
angular.module('parkerBarkerApp')
  .controller('HomeCtrl', function ($scope, $location) {
    $scope.cameron = {
      name: "barker",
      image: "images/portrait/him.jpg",
      logoImage: "images/logo/barker.png",
      logoOriginal: "images/logo/barker.png",
      logoHover: "images/logo/barker-white.png",
      url: "barker"
    };
    $scope.hayley = {
      name: "parker",
      image: "images/portrait/her.jpg",
      logoImage: "images/logo/parker.png",
      logoOriginal: "images/logo/parker.png",
      logoHover: "images/logo/parker-white.png",
      url: "parker",
    };
    $scope.changeView = function(view){
      $location.path(view); // path not hash
    };
    $scope.hoverIn = function(obj){
      obj.logoImage = obj.logoHover;
    };
    $scope.hoverOut = function(obj){
      obj.logoImage = obj.logoOriginal;
    };
  });
