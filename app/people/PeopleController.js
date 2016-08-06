var people = angular.module('people', []);

people.controller('peopleController', function($scope) {
  $scope.peoples = $scope.users;
  console.log($scope.peoples);

  $scope.dropallPeople = function(val){
    if(val==""){
      $scope.search = {};
    }
  }
});
