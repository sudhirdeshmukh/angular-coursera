(function(){
  angular.module('dependancyInjection',[])
  .controller('dependancyInjectionController', DIController);
//for minification pls pass params in array like given below
//  .controller('dependancyInjectionController', ['$scope','$filter',DIController]);
//  or write down below
// DIController.$inject=['$scope','$filter'];
  function DIController($scope,$filter,$injector){
    $scope.name='SUDHIR';
    $scope.upper=function(){
      var upCase = $filter('uppercase');
      $scope.name=upCase($scope.name);
    };
  }
})();
