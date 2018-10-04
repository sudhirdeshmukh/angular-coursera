(function(){
  angular.module("FilterModule",[])
  .controller("FilterModuleController",FilterModuleController);

  FilterModuleController.$inject = ["$scope","$filter"];
  function FilterModuleController($scope,$filter){
      var uppercaseFilter = $filter('uppercase');

      var msg="welcome aboard";
      $scope.message=uppercaseFilter.msg;
  }
})();
