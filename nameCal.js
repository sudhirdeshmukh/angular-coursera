(function(){
  angular.module('nameCalculator',[])
  .controller('nameCalculatorController',function($scope){
    $scope.name="";
    $scope.totalValue=0;
    $scope.displayNumeric=function(){
      $scope.totalValue=calculateNumericForString($scope.name);
    };

    function calculateNumericForString(string){
      var totStringValue=0;
      for(var i = 0; i < string.length; i++){
        totStringValue += string.charCodeAt(i);
      }
      return totStringValue;
    }
  });
})();
