angular.module('angularGauge', []).directive('gauge', ['$timeout', function($timeout) {
  return {
    restrict : 'E',
    replace : true,
    scope : {
      idGauge : '@',
      value : '=',
      minValue : '=',
      maxValue : '=',
      title : '=',
      label : '=',
      hideMinMax : '=',
      symbol : '=',
      backgroundColor : '=',
      levelsColor : '=',
      gradientLevelsColor : '=',
      minValueFontSize : '=',
      minTitlefontSize : '=',
      minLabelFontSize : '=',
      minMinMaxFontSize : '=',
      options : '='
    },
    template : "<div id='{{chartId}}' style='margin-top: {{margin}}px; margin-bottom: {{marginBottom}}px'></div>",
    controller : ['$scope', '$timeout', function($scope, $timeout) {
      $scope.chartId = ($scope.idGauge) ? $scope.idGauge : "gauge" +getRandomInt(0, 1000);
      $scope.margin = ($scope.title) ? 0 : -15;
      $scope.marginBottom = (!$scope.label && $scope.hideMinMax) ? -10 : 0;
    }],
    link : function(scope, element, attrs) {
      // Init
      $timeout(function(){
      angular.element(document).ready(function() {
      	// Use the options object, if you want to directly use the
      	// params of https://github.com/toorshia/justgage
      	var options = scope.options || {
          id : scope.chartId,
          value : (scope.value) ? scope.value : 0,
          title : (scope.title) ? scope.title : " ",
          min : (scope.minValue) ? scope.minValue : 0,
          max : (scope.maxValue) ? scope.maxValue : 100,
          label : (scope.label) ? scope.label : "",
          hideMinMax : scope.hideMinMax == true,
          symbol : scope.symbol ? scope.symbol : "",
          gaugeColor : (scope.backgroundColor) ? scope.backgroundColor : "#EEE",
          noGradient : (scope.gradientLevelsColor) ? !scope.gradientLevelsColor : true,
          levelColors : (scope.levelsColor) ? scope.levelsColor : ["#000000"],
          valueMinFontSize : (scope.minValueFontSize) ? scope.minValueFontSize : 16,
          titleMinFontSize  : (scope.minTitlefontSize) ? scope.minTitlefontSize : 10,
          labelMinFontSize  : (scope.minLabelFontSize) ? scope.minLabelFontSize : 10,
          minLabelMinFontSize  : (scope.minMinMaxFontSize) ? scope.minMinMaxFontSize : 10
        };
        scope.currentGauge = new JustGage(options);
      });
      }, 0);

      scope.$watch('max', function(updatedMax) {
        if (scope.currentGauge && updatedMax !== undefined) {
          scope.currentGauge.refresh(scope.value, updatedMax);
        }
      }, true);

      scope.$watch('value', function(updatedValue) {
        if (scope.currentGauge && updatedValue !== undefined) {
          scope.currentGauge.refresh(updatedValue);
        }
      }, true);
    }
  };
}]);