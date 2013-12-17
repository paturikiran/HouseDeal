/**
 * Created by paturik on 12/17/13.
 */
houseDeal.directive('fetchCities',['$http','apiService',function($http,apiService){
    return{
        restrict:'E',
        templateUrl:'Partials/fetchCities.html',
        controller:function($scope){
            $scope.cities = function (cityName){
                $scope.country = '';
                $scope.latitude = '';
                $scope.longitude = '';
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
                return $http.jsonp
                    ("http://gd.geobytes.com/GetCityDetails?callback=JSON_CALLBACK&fqcn=" + scope.city)
                    .then(function (response) {
                       scope.country = response.data.geobytescountry;
                       scope.latitude =response.data.geobyteslatitude;
                       scope.longitude = response.data.geobyteslongitude;
                       apiService.setCoordinates(scope.latitude,scope.longitude,scope.country,scope.city,'');
                    });
            })
        }

    }
 }])
