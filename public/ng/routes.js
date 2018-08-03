axolote.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/servers', {
            templateUrl: './views/servers.html',
            controller: 'serverController'
        })
        .when('/servers/:id', {
            templateUrl: './views/serverDetail.html',
            controller: 'serverController'
        })
        .when('/works', {
            templateUrl: './views/works.html',
            controller: 'workController'
        })
        .otherwise({
            redirectTo: '/servers'
        });
}]);