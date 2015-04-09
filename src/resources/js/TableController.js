var vectorApp = angular.module("vectorApp", []);

	vectorApp.controller('VectorCtrl',  function($scope, $http){
		$http.get('resources/json/data.json').success(function(data){
			$scope.vectorData = data;
		});

		$scope.signalName = [{"signal":"DBank1"},
					   		 {"signal":"DBank2"},
					   		 {"signal":"DBank3"},
					   		 {"signal":"DBank4"}];

		$scope.signalData = ["1","0","1","1","0","1","1","0","0"];
		$scope.getNumber = function(num) {
    		return new Array(num);   
		};
	});