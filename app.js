(function(){
  'use strict';
  angular.module('myFirstApp',[])
  .controller('myFirstController',function($scope){
    $scope.name="Sudhir";
    $scope.getMessage = function(){
      return "Hello " + $scope.name;
    };
  });
})();
