module.exports = function($scope, $http) {

    return $http({
        "method": "GET",
        "url": "/api/pages/homepage"
    }).then(function(data){
        $scope.data = data.data.document;
        $scope.headline = data.data.headline;

        return $scope;
    }, function(){
        // error
    });

}
