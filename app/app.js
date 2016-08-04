var app = angular.module('app', 
  [
    'ngRoute',
    'auth',
    'main',
    'aboutme'
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
      .otherwise({
        redirectTo: '/'
      });

});
