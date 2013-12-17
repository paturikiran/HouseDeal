/**
 * Created by paturik on 12/17/13.
 */
houseDeal.controller('searchCtrl',['$scope','apiService',function($scope,apiService){
    $scope.latitude='17.391';
    $scope.longitude='78.4712';
     var initializeController = function()
    {
        $scope.latitude=apiService.getCoordinates().latitude;
        $scope.longitude=apiService.getCoordinates().longitude;
    };
    initializeController();
}]);
