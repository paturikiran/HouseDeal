/**
 * Created by paturik on 12/17/13.
 */
houseDeal.directive('fetchCoordinates',[function(){
    return{
        restrict:'E',
        templateUrl:'Partials/fetchcoordinates.html',
        scope:{
            city:'=',
            country:'=',
            latitude:'=',
            longitude:'='
        },
        link:function(scope,element,attrs)
        {


        }
    };
})