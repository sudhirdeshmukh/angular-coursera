(function(){
  //added custom filter named love.
  angular.module("FilterModule",[])
  .controller("FilterModuleController",FilterModuleController)
  .filter('love',LovesFilter)
  .filter('truth',TruthFilter);

  FilterModuleController.$inject = ["$scope","$filter","$timeout"];
  function FilterModuleController($scope,$filter,$timeout){
      var uppercaseFilter = $filter('uppercase');

      var msg="Sudhir likes trekking";
      //$scope.message=uppercaseFilter(msg);

      $scope.message=msg;
      $scope.cookieCost=45;
      var love = $filter('love');
      $scope.lovesMessage= love(msg);


      //watchers  -- dont do this way in controller
        $scope.username = "sudhirpatil"; // for one time binding
      $scope.getAllWatchers = function (){
          $scope.watchersCount=$scope.$$watchersCount;
          $scope.username = "rajanpatil";
          //value got updated but watcher is not there so
          // that sudhirpatil will be the username in UI
      };
      //
      // $scope.counter =0 ;
      // $scope.upCounter= function (){
      //     $scope.counter++;
      // };
      //
      // $scope.$watch('counter' , function (newValue , oldvalue){
      //   console.log("Counter Old Value : ", oldvalue);
      //   console.log("Counter new Value : ", newValue);
      // });

      //automated way of using watchers (Built in watchers)
        $scope.name="Sudhir";

        // $scope.$watch(function(){
        //   console.log("Digest loop Fired");
        // });


        //Digest
        // $scope.counter =0 ;
        // $scope.upCounter= function (){
        //   setTimeout(function(){
        //       $scope.counter++;
        //       console.log("counter Increamented");
        //       $scope.$digest();
        //   },2000);
        // };

          //using apply (wrap code inside of apply)
        // $scope.counter =0 ;
        // $scope.upCounter= function (){
        //   setTimeout(function(){
        //     $scope.$apply(function(){
        //       $scope.counter++;
        //       console.log("Counter Increamented");
        //     });
        //   },2000);
        // };

        //native timeout property of angular
        //use native angular functions instead of javascript
        $scope.counter =0 ;
        $scope.upCounter= function (){
          $timeout(function(){
              $scope.counter++;
              console.log("Counter Increamented "+ Date());
          },1000);
        };


  }

  function LovesFilter(){
    return function (input){
      input = input || "";
      input  = input.replace("like","love");
      input  = input.replace("Like","Love");
      input  = input.replace("LIKE","LOVE");
      //replacements are case sensitive
      return input;
    };
  }

  function TruthFilter(){ //filter with extra arguments
    return function (input, target, replace ){
      input = input || "";
      input  = input.replace(target,replace);
      return input;
    };
  }




})();
