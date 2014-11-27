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
			showMinMax : '=',
			backgroundColor : '=',
			levelsColor : '=',
			gradientLevelsColor : '=',
		},
		template : "<div id='{{chartId}}' style='margin-top: {{margin}}px'></div>",
		controller : function($scope, $timeout) {
			$scope.chartId = ($scope.idGauge) ? $scope.idGauge : "gauge" +getRandomInt(0, 1000);
			$scope.margin = ($scope.title) ? 0 : -15;
		},
		link : function(scope, element, attrs) {
			// Init
			$timeout(function(){
			angular.element(document).ready(function() {
				scope.currentGauge = new JustGage({
					id : scope.chartId,
					value : (scope.value) ? scope.value : 0,
					title : (scope.title) ? scope.title : " ",
					min : (scope.minValue) ? scope.minValue : 0,
					max : (scope.maxValue) ? scope.maxValue : 100,
					label : (scope.label) ? scope.label : "",
					showMinMax : (scope.showMinMax) ? scope.showMinMax : false,
					gaugeColor : (scope.backgroundColor) ? scope.backgroundColor : "#EEE",
					noGradient : (scope.gradientLevelsColor) ? !scope.gradientLevelsColor : true,
					levelColors : (scope.levelsColor) ? scope.levelsColor : ["#000000"]
				});
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