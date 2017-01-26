module.exports = function($scope, $http) {

    $http({
        "method": "GET",
        "url": "/api/pages/education"
    }).then(function(data){
        $scope.courses = data.data.document;
    }, function(){
        // error
    });
    
}