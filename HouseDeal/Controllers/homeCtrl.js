/**
 * Created by paturik on 12/17/13.
 */
houseDeal.controller('homeCtrl',['$scope','menuService',function($scope,menuService){
    $scope.title ="Welcome";
    $scope.menu ={};
    $scope.menuItems =[];
    var initializeController= function(){
        $scope.menuItems = menuService.getMenuItems();
    }
    $scope.setMenu = function(menu){
        angular.forEach($scope.menuItems,function(item,index){
                item.active = item.name === menu.name;
        });
    }
    initializeController();
}]);





