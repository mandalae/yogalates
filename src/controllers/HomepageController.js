module.exports = function($scope, $http) {

    $http({
        "method": "GET",
        "url": "/api/pages/homepage"
    }).then(function(data){
        $scope.data = data.data.document;
        $scope.headline = data.data.headline;
    }, function(){
        // error
    });
    
}