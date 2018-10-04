//shopping list service
// (function(){
//   angular.module("Shop",[])
//   .controller("AddItem",AddItem)
//   .controller("DisplayItem",DisplayItem)
//   .service("ManageItem",ManageItem);
//
// AddItem.$inject=['ManageItem'];
// function AddItem(ManageItem){
//   var item = this;
//   item.name="";
//   item.qty="";
//   item.addItem = function(){
//     ManageItem.addItem(item.name, item.qty);
//   };
// }
//
// AddItem.$inject=['ManageItem'];
// function DisplayItem(ManageItem){
//   var di = this;
//   di.items = ManageItem.getItems();
//
//   di.removeItem = function(itemIndex){
//     ManageItem.removeItem(itemIndex);
//   };
// }
//
// function ManageItem(){
//   var items = [];
//   var mi = this;
//   mi.addItem = function(name,qty){
//     var item={
//       Name : name, Qty : qty
//     };
//     items.push(item);
//     console.log(items);
//   }
//
//   mi.getItems=function(){
//     return items;
//   }
//
//   mi.removeItem = function (itemIndex){
//       items.splice(itemIndex,1);
//   };
// }
//
//
// })();

//------------------------------------------------------------------------------------------

//factory creates the instances of the same service
//but service uses only one instance throughout of the application
// (function(){
//   angular.module("Shop",[])
//   .controller("shoppinglist1",shoppinglist1)
//   .controller("shoppinglist2",shoppinglist2)
//   .factory("ShoppingListFactory", ShoppingListFactory);
//   //.service("ManageItem",ManageItem);
//
// shoppinglist1.$inject=['ShoppingListFactory'];
// function shoppinglist1(ShoppingListFactory){
//   var list1 = this;
//   list1.name="";
//   list1.qty="";
//
//   var shoppinglist = ShoppingListFactory();
//
//   list1.addItem = function(){
//     shoppinglist.addItem(list1.name, list1.qty);
//   };
//
//   list1.items = shoppinglist.getItems();
//
//   list1.removeItem = function(itemIndex){
//     shoppinglist.removeItem(itemIndex);
//   };
//
// }
//
//--------------------------------------------------------------------------------------
// shoppinglist2.$inject=['ShoppingListFactory'];
// function shoppinglist2(ShoppingListFactory){
//
//   var list2 = this;
//   list2.name="";
//   list2.qty="";
//
//   var shoppinglist = ShoppingListFactory(3);
//
//   list2.addItem = function(){
//     try{
//       shoppinglist.addItem(list2.name, list2.qty);
//     }catch(error){
//       list2.errorMessage = error.message;
//     }
//   };
//
//   list2.items = shoppinglist.getItems();
//
//   list2.removeItem = function(itemIndex){
//     shoppinglist.removeItem(itemIndex);
//   };
// }
//
// function ManageItem(maxItems){
//   var items = [];
//   var mi = this;
//   mi.addItem = function(name,qty){
//     if((maxItems === undefined) || (maxItems!==undefined) && (items.length < maxItems)){
//       var item={
//         Name : name, Qty : qty
//       };
//       items.push(item);
//       console.log(items);
//     }else{
//       throw new Error("Max items ("+ maxItems+") reached.");
//     }
//   }
//
//   mi.getItems=function(){
//     return items;
//   }
//
//   mi.removeItem = function (itemIndex){
//       items.splice(itemIndex,1);
//   };
// }
//
//
// function ShoppingListFactory(){
//   var factory = function(maxItems){
//     return new ManageItem(maxItems);
//   };
//
//   return factory;
//
// }
// })();

//------------------------------------------------------------------------------------------------------
//provider is same as factory

//but it configures factory not just at time of use, but at app bootstraping
//config() gets called b4 any factory, service, controller is instantiated
//we cant inject any regular components info config
//we can inject provider of service with nameProvider
// (function(){
//   angular.module("Shop",[])
//   .controller("shoppinglist1",shoppinglist1)
//   .controller("shoppinglist2",shoppinglist2)
//   .factory("ShoppingListFactory", ShoppingListFactory)
//   .provider("shoppinglist2service",shoppinglist2service)
//   .config(Config);
//   //.service("ManageItem",ManageItem);
// Config.$inject = ['shoppinglist2serviceProvider'];
// function Config(shoppinglist2serviceProvider){
//   shoppinglist2serviceProvider.defaults.maxItems = 2;
// }
//
// shoppinglist1.$inject=['ShoppingListFactory'];
// function shoppinglist1(ShoppingListFactory){
//   var list1 = this;
//   list1.name="";
//   list1.qty="";
//
//   var shoppinglist = ShoppingListFactory();
//
//   list1.addItem = function(){
//     shoppinglist.addItem(list1.name, list1.qty);
//   };
//
//   list1.items = shoppinglist.getItems();
//
//   list1.removeItem = function(itemIndex){
//     shoppinglist.removeItem(itemIndex);
//   };
//
// }
//
// shoppinglist2.$inject=['shoppinglist2service'];
// function shoppinglist2(shoppinglist2service){
//
//   var list2 = this;
//   list2.name="";
//   list2.qty="";
//
//   //var shoppinglist = ShoppingListFactory(3);
//
//   list2.addItem = function(){
//     try{
//       shoppinglist2service.addItem(list2.name, list2.qty);
//     }catch(error){
//       list2.errorMessage = error.message;
//     }
//   };
//
//   list2.items = shoppinglist2service.getItems();
//
//   list2.removeItem = function(itemIndex){
//     shoppinglist2service.removeItem(itemIndex);
//     list2.errorMessage="";
//   };
// }
//
// function ManageItem(maxItems){
//   var items = [];
//   var mi = this;
//   mi.addItem = function(name,qty){
//     if((maxItems === undefined) || (maxItems!==undefined) && (items.length < maxItems)){
//       var item={
//         Name : name, Qty : qty
//       };
//       items.push(item);
//     }else{
//       throw new Error("Max items ("+ maxItems+") reached.");
//     }
//   }
//
//   mi.getItems=function(){
//     return items;
//   }
//
//   mi.removeItem = function (itemIndex){
//       items.splice(itemIndex,1);
//   };
// }
//
//
// function ShoppingListFactory(){
//   var factory = function(maxItems){
//     return new ManageItem(maxItems);
//   };
//
//   return factory;
//
// }
//
// function shoppinglist2service(){
//   var provider = this;
//   provider.defaults={
//     maxItems:3
//   };
//   provider.$get = function (){
//     var shoppinglist = new ManageItem(provider.defaults.maxItems);
//     return shoppinglist;
//   };
// }
// })();



//------------------------------------------------------------------------------------
(function(){
  angular.module("Shop",[])
  .controller("shoppinglist1",shoppinglist1)
  .controller("shoppinglist2",shoppinglist2)
  .factory("ShoppingListFactory", ShoppingListFactory)
  .provider("shoppinglist2service",shoppinglist2service)
  .config(Config)
  .service("WeightLossFilterService",WeightLossFilterService)
  .service("ManageItem",ManageItem);



Config.$inject = ['shoppinglist2serviceProvider'];
function Config(shoppinglist2serviceProvider){
  shoppinglist2serviceProvider.defaults.maxItems = 2;
}

shoppinglist1.$inject=['ShoppingListFactory'];
function shoppinglist1(ShoppingListFactory){
  var list1 = this;
  list1.name="";
  list1.qty="";

  var shoppinglist = ShoppingListFactory();

  list1.addItem = function(){
    shoppinglist.addItem(list1.name, list1.qty);
  };

  list1.items = shoppinglist.getItems();

  list1.removeItem = function(itemIndex){
    shoppinglist.removeItem(itemIndex);
  };

}

shoppinglist2.$inject=['shoppinglist2service'];
function shoppinglist2(shoppinglist2service){

  var list2 = this;
  list2.name="";
  list2.qty="";

  //var shoppinglist = ShoppingListFactory(3);

  list2.addItem = function(){
    try{
      shoppinglist2service.addItem(list2.name, list2.qty);
    }catch(error){
      list2.errorMessage = error.message;
    }
  };

  list2.items = shoppinglist2service.getItems();

  list2.removeItem = function(itemIndex){
    shoppinglist2service.removeItem(itemIndex);
    list2.errorMessage="";
  };
}

ManageItem.$inject = ['$q', 'WeightLossFilterService'];
function ManageItem($q, WeightLossFilterService, maxItems){
  var items = [];
  var mi = this;
  mi.addItem = function(name,qty){
    if((maxItems === undefined) || (maxItems!==undefined) && (items.length < maxItems)){

      var promise  = WeightLossFilterService.checkName(name);
      promise.then(function(response){
        var nextPromise = WeightLossFilterService.checkQuantity(qty);
        nextPromise.then(function (result){
          var item={
            Name : name, Qty : qty
          };
          items.push(item);
        },function(errorResponse){
          console.log(errorResponse.message);
        });
      },function(errorResponse){
        console.log(errorResponse.message);
      });


    }else{
      throw new Error("Max items ("+ maxItems+") reached.");
    }




  }

  mi.getItems=function(){
    return items;
  }

  mi.removeItem = function (itemIndex){
      items.splice(itemIndex,1);
  };
}


function ShoppingListFactory(){
  var factory = function(maxItems){
    return new ManageItem(maxItems);
  };

  return factory;

}

function shoppinglist2service(){
  var provider = this;
  provider.defaults={
    maxItems:3
  };
  provider.$get = function (){
    var shoppinglist = new ManageItem(provider.defaults.maxItems);
    return shoppinglist;
  };
}

WeightLossFilterService.$inject=['$q','$timeout'];
function WeightLossFilterService ($q, $timeout){
    var service = this;
console.log('sudhir');
    service.checkName = function(name){
      var deferred = $q.defer();  //important

      var result = {
        message : ""
      };

    //  $timeout(function(){
        if(name.toLowerCase().indexOf('tea') === -1){
          deferred.resolve(result);
        }else{
          result.message = "stay away from tea, Sudhir!";
          deferred.reject(result);
        }
    //  },2000);

      return deferred.promise;
    };

    service.checkQuantity = function(quantity){
        var deferred  = $q.defer();

        var result = { message:""};
        $timeout(function(){

        if(quantity < 6){
          deferred.resolve(result);
        }else{
          result.message = "gonna be fat.";
          deferred.reject(result);
        }
      },1000);
      return deferred.promise;
    };
  }


})();
