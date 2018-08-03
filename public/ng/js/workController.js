axolote.controller("workController", ['$scope', '$http', 'workService', function ($scope, $http, workService) {
    $scope.app = "Works";
    $scope.works = [];

    var loadWorks = function () {
        workService.getAllWorks().then(function (response) {
            $scope.works = response.data;
        }, function (response, status) {
            $scope.messageBox = "Error: " + response;
        });
    };

    loadWorks();
}]);
