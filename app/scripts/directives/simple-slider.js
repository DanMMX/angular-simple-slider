angular.module('angularSimpleSlider')
  .directive('simpleSlider', ['SimpleSliderService', function (SimpleSliderService) {

    'use strict';

    return {

      restrict: 'EA',
      scope: {
        onChange: '&'
      },

      link: function postLink(scope, element, attrs) {
        var opts = attrs;

        if (scope.onChange) {
          opts.onChange = scope.onChange;
        }

        scope.slider = new SimpleSliderService(element[0], opts);

        attrs.$observe('change', function(value) {
          if (value) {
            scope.slider.change(value);
          }
        });

      }
    };
  }]);
