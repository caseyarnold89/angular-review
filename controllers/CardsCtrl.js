app.controller('CardsCtrl', ['$scope', 'dataService', function($scope, dataService) {
    
    $scope.letsGetSomeData = function() {
        $scope.superHeroes = dataService.getMeDatData();
    };

    $scope.letsGetSomeData();
    
}]);