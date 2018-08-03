axolote.factory("backupService", ['$http', 'config', function($http, config){
    
    var _getAllBackups = function(){
        return $http.get(config.axoloteBaseApi + "/backups");
    };

    var _getPaginateBackups = function (page) {
        return $http.get(config.axoloteBaseApi + "/backups/page/" + page);
    };

    var _postBackups = function (backup) {
        return $http.post(config.axoloteBaseApi + "/backups", backups);
    };

    return {
        getAllBackups: _getAllBackups,
        getPaginateBackups: _getPaginateBackups,
        postBackup: _postBackup
    };
}]);
