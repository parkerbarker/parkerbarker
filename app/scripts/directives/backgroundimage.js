'use strict';

/**
 * @ngdoc directive
 * @name parkerBarkerApp.directive:backgroundImage
 * @description
 * # backgroundImage
 */
angular.module('parkerBarkerApp')
  .directive('backgroundImage', function () {
    return function(scope, element, attrs){
        var url = attrs.backgroundImage;
        element.css({
            'background-image': 'url(' + url +')',
            'background-size' : 'cover'
        });
    };
  });
