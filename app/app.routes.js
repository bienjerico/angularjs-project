app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/views/auth.html'
        ,controller: 'authController'
      })
      .otherwise({
        redirectTo: '/'
      });

});
