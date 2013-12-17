/**
 * Created by paturik on 12/17/13.
 */
houseDeal.directive('fetchCities',['$http',function($http){
    return{
        restrict:'E',
        templateUrl:'Partials/fetchCities.html',
        controller:function($scope){
            $scope.cities = function (cityName){
                return $http.jsonp("http://gd.geobytes.com/AutoCompleteCity?callback=JSON_CALLBACK &filter=IN&q=" + cityName)
                    .then(function (response) {
                        console.log(response.data);
                        return response.data;
                    });
            }
        },
        link:function(scope,element,attrs){
            var selectedCity = element.find("input");
            selectedCity.bind('blur',function(){
                return $http.jsonp("http://gd.geobytes.com/GetCityDetails?callback=JSON_CALLBACK&fqcn=" + selectedCity.html())
                    .then(function (response) {
                        console.log(response.data);
                        return response.data;
                    });
            })
        }

    }
 }])
