const fetchPage = $http => {
    return $http({
        "method": "GET",
        "url": "/api/pages/education"
    });
}

module.exports = function($scope, $http) {

    return fetchPage($http).then(function(data){
        $scope.courses = data.data.document;
        return $scope;
    }).catch(function(){
        // error handling
    });

}
