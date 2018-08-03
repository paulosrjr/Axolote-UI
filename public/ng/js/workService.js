axolote.factory("workService", ['$http', 'config', function($http, config){
    
    var _getAllWorks = function(){
        return $http.get(config.axoloteBaseApi + "/works");
    };

    var _getPaginateWorks = function (page) {
        return $http.get(config.axoloteBaseApi + "/works/page/" + page);
    };

    var _postWork = function (server) {
        return $http.post(config.axoloteBaseApi + "/works", server);
    };

    return {
        getAllWorks: _getAllWorks,
        getPaginateWorks: _getPaginateWorks,
        postWork: _postWork
    };
}]);
