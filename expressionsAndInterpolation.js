(function (){
  angular.module("expressionsAndInterpolation",[])
  .controller("expressionsAndInterpolationController", expressionsAndInterpolation)
  .controller("imageController",imageController);

  expressionsAndInterpolation.$inject=['$scope'];
  function expressionsAndInterpolation($scope){
    $scope.name="Sudhir";

    $scope.sayMessage = function(){
      return $scope.name + " likes something weird";
    };
  }
  imageController.$inject=['$scope'];
    function imageController($scope){
      $scope.image="MVVM.png";
      $scope.getImage=function(){
         $scope.image = $scope.image === "MVVM.png" ? "MVVM2.png": "MVVM.png";
      };
    }


})();
