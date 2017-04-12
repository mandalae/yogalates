const fetchPage = $http => {
    return $http({
        "method": "GET",
        "url": "/api/pages/classes"
    });
}

module.exports = function($scope, $http) {

    return fetchPage($http).then(function(data){
        $scope.document = data.data.document;
        console.log($scope.document);
        return $scope;
    }).catch(function(){
        // error handling
    });

}
