var main = angular.module('main', []);


main.controller('mainController', function($scope,$http) {

	var getData = function(){
		$http.get('app/data.json').success(function(response) {
			$scope.users = response;
		});
	}

	getData();

  	// notification message default
	$scope.msg = {
			status : 'danger',
			message : 'Something wrong.',
			result : false
	};

});