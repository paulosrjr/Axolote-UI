axolote.controller("serverController", ['$scope', '$http', 'serverService', function ($scope, $http, serverService) {
    $scope.app = "Servers";
    $scope.servers = [];

    var loadServers = function(){
        serverService.getAllServers().then(function(response){
            $scope.servers = response.data;
        }, function(response, status){
            $scope.messageBox = "Error: " + response; 
        });
    };

    $scope.newServer = function (clickEvent){
        $scope.newForm = simpleKeys(clickEvent);
        console.log(clickEvent);
    };

    loadServers();
}]);
