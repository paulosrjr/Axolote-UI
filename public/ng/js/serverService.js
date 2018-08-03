axolote.factory("serverService", ['$http', 'config', function($http, config){
    
    var _getAllServers = function(){
        return $http.get(config.axoloteBaseApi + "/servers");
    };

    var _getPaginateServers = function (page) {
        return $http.get(config.axoloteBaseApi + "/servers/page/" + page);
    };

    var _postServer = function (server) {
        return $http.post(config.axoloteBaseApi + "/servers", server);
    };

    return {
        getAllServers: _getAllServers,
        getPaginateServers: _getPaginateServers,
        postServer: _postServer
    };
}]);
