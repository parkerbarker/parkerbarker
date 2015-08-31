'use strict';

/**
 * @ngdoc directive
 * @name parkerBarkerApp.directive:hoverImage
 * @description
 * # hoverImage
 */
angular.module('parkerBarkerApp')
  .directive('hoverImage', function () {
    return function(scope, element, attrs){
        var original_src = attrs.ngSrc;
        var hover_src = attrs.hoverImage;
        element.hover(
          function() {
            element.attr("src", hover_src);
          }, function() {
            element.attr("src", original_src);
          }
        );

    };
  });
