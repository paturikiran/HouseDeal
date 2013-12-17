/**
 * Created by paturik on 12/17/13.
 */
houseDeal.service('menuService',function(){
    var menuItems = [
        {name:'home',active:true},
        {name:'search',active:false},
        {name:'add',active:false}
    ];

    return{
      getMenuItems : function()
    {
        return menuItems;
    }
    };
})