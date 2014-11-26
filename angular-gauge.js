angular.module('angularGauge', []).directive('gauge', function() {
	return {
		restrict : 'E',
		replace : true,
		scope : {
			id : '@',
			value : '=',
			minValue : '=',
			maxValue : '=',
			title : '=',
			label : '=',
			showMinMax : '=',
			backgroundColor : '=',
			levelsColor : '=',
			gradientLevelsColor : '=',
		},
		template : "<div id='{{chartId}}'></div>",
		controller : function($scope) {
			$scope.chartId = ($scope.id) ? $scope.id : "gauge" +getRandomInt(0, 1000);
		},
		link : function(scope, element, attrs) {
			angular.element(document).ready(function() {
				new JustGage({
					id : scope.chartId,
					value : (scope.value) ? scope.value : 0,
					title : (scope.title) ? scope.title : " ",
					min : (scope.minValue) ? scope.minValue : 0,
					max : (scope.maxValue) ? scope.maxValue : 100,
					label : (scope.label) ? scope.label : "",
					showMinMax : (scope.showMinMax) ? scope.showMinMax : false,
					gaugeColor : (scope.backgroundColor) ? scope.backgroundColor : "#EEE",
					noGradient : (scope.gradientLevelsColor) ? scope.gradientLevelsColor : true,
					levelColors : (scope.levelsColor) ? scope.levelsColor : ["#000000"]
				});
			});

			scope.$watch('max', function(updatedMax) {
				if (updatedMax !== undefined) {
					graph.refresh(scope.value, updatedMax);
				}
			}, true);

			scope.$watch('value', function(updatedValue) {
				if (updatedValue !== undefined) {
					graph.refresh(updatedValue);
				}
			}, true);
		}
	};
}); 