var app = angular.module('app',
  [
    'ngRoute',
    'auth',
    'main',
    'aboutme',
    'people',
    'menulist'
  ]
);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/auth/auth.html',
        controller: 'authController'
      })
      .when('/aboutme', {
        templateUrl: 'app/about/aboutme.html',
        controller: 'aboutmeController'
      })
      .when('/people', {
        templateUrl: 'app/people/people.html',
        controller: 'peopleController'
      })
      .otherwise({
        redirectTo: '/'
      });

});
