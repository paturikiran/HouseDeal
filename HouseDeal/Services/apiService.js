/**
 * Created by paturik on 12/17/13.
 */
houseDeal.service('apiService',['$http',function($http){
    var criteria = {
        city:'',
        country:'',
        latitude:'',
        longitude:'',
        addressLine1:'',
        addressLine2:''
    }
    return{
        setCoordinates : function(latitude,longitude,country,city,addressLine1){
            criteria :{ city =city,country =country,latitude=latitude,longitude=longitude};
            },
        getCoordinates : function(){
         return criteria;
        }
    };
}])