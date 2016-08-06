var menulist = angular.module('menulist',[]);

menulist.controller('menuController', function($scope) {

  $scope.menus = [
    {
      url: '#/aboutme',
      title: 'About Me'
    },
    {
      url: '#/people',
      title: 'People'
    }
  ];
  console.log($scope.menus);

});
