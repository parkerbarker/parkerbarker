'use strict';

/**
 * @ngdoc function
 * @name parkerBarkerApp.controller:BarkerCtrl
 * @description
 * # BarkerCtrl
 * Controller of the parkerBarkerApp
 */
angular.module('parkerBarkerApp')
  .controller('BarkerCtrl', function ($scope, barkerProjects) {
    barkerProjects.success(function(data) {
      $scope.projects = data;
    });

    $scope.languages = [
      "Ruby",
      "Swift",
      "Javascript",
      "Jquery",
      "Sass",
      "Haml"
    ];

    $scope.frameworks = [
      "Ruby on Rails",
      "iOS",
      "Shopify",
      "Bootstrap",
      "Materialize"
    ];

    $scope.databases = [
      "Postgres",
      "Redis",
      "ElasticSearch",
      "Solr"
    ];

    $scope.learning = [
      "Coffeescript",
      "Node",
      "Express.js",
      "Angular",
      "Monogoid",
      "Python",
      "Go"
    ];

    $scope.applications = [
      "Unity3D",
      "Photoshop",
      "Atom"
    ];

    $scope.education = [
      "University of Utah BS 2010",
      "GA: Data Science 2015",
      "GA: Product Managment 2016"
    ];

    $scope.meetups = [
      "NY.rb"
    ];

    $scope.interests = [
      "Family", "Films", "Wood Working", "Robots", "Reading"
    ];

    $scope.mission = "Be Somebody";
    $scope.personal_goals = "Positive, Patient, Persistant";

    $scope.modal = {
      title: "cat",
      description: "",
      url: "",
      job_title: "",
      myInterval: 3000,
      slides: []
    };

    // $scope.updateModal = function(obj){
    //   $scope.modal.title = obj.title;
    //   $scope.modal.description = obj.description;
    //   $scope.modal.url = obj.url;
    //   $scope.modal.job_title = obj.job_title;
    //   // $scope.modal.slides = obj.images;
    // };
  });
