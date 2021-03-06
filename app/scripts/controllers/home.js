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
      image: "images/portrait/him-anon-min.jpg",
      logoImage: "images/logo/barker-min.png",
      logoOriginal: "images/logo/barker-min.png",
      logoHover: "images/logo/barker-white-min.png",
      url: "barker"
    };
    $scope.hayley = {
      name: "parker",
      image: "images/portrait/her-anon-min.jpg",
      logoImage: "images/logo/parker-min.png",
      logoOriginal: "images/logo/parker-min.png",
      logoHover: "images/logo/parker-white-min.png",
      url: "http://www.culdesackid.com",
    };
    $scope.changeView = function(view){
      $location.path(view); // path not hash
    };
    $scope.changeLocation = function(view){
      window.location.href = view; // path not hash
    };
    $scope.hoverIn = function(obj){
      obj.logoImage = obj.logoHover;
    };
    $scope.hoverOut = function(obj){
      obj.logoImage = obj.logoOriginal;
    };
  });
