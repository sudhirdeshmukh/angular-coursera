(function(){
  angular.module("FoodConsumption",[])
  .controller("FoodConsumptionController",FoodConsumptionController);

  FoodConsumptionController.$inject=['$scope'];
  function FoodConsumptionController($scope){
    $scope.status="";
    $scope.food = "";
    $scope.checkIfTooMuch = function(){
      var foods = $scope.food.split(',');
      var len = foods.length;
      $scope.status = (len==1 && foods[0]=="")? "Please enter data first":(len > 3)?"Too much!":"Enjoy!";
    };
  }
})();
