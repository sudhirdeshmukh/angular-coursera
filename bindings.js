(function(){
  angular.module("NgRepeat",[])
  .controller("NgRepeatController",NgRepeatController)
    .controller("Controller1",Controller1)
      .controller("Controller2",Controller2);

  NgRepeatController.$inject = ["$scope"];

  var list1  = ["sudhir","rajan", "raman", "vishal", "rahul"];

    var list2  = [{name :"sudhir",surname:"Deshmukh"},{name :"rajan",surname:"Deshmukh"},
    {name :"raman",surname:"Sarang"}, {name :"vishal",surname:"Patil"}, {name :"rahul",surname:"Raje"}];


  function NgRepeatController($scope,$filter){
      $scope.list1 = list1;
      $scope.list2 = list2;
      $scope.editname="";
      $scope.addUser = function(){
          var newUser={
            name: $scope.addname,
            surname: $scope.addsurname
          };
          $scope.list2.push(newUser);
      };

      //way1 to filter elements
    // var list3 = [1,2,3,4,5,6,7,8,9];
    // var filteredArray = list3.filter(function(value){
    //   return value>5;
    // });
    // console.log("Filtered Array ", filteredArray);

    //way 2 to filter elements
    // var list3 = [1,2,3,4,5,6,7,8,9];
    // function filterAbove5(value){
    //   return value > 5;
    // }
    // var filteredArray = list3.filter(filterAbove5);
    // console.log("Filtered Array ", filteredArray);

    //filter way3
    // var searchValue = "Deshmukh";
    // function containsFilter(value){
    //   return value.surname.indexOf(searchValue)!==-1;
    // }
    // var searchedArray = list2.filter(containsFilter);
    // console.log("list2 filtered", searchedArray);
    //  $scope.list2 = searchedArray;

    //function constructor
    // var myDog = new Dog("Max");
    // console.log("myDog: ",myDog);
    //
    // Dog("Max2"); //this will not work as it points to window.

    //inheritance by JS prototyping --- prototypal inheritance
    // var student1={
    //     name:"sudhir"
    // };
    // var student2 = Object.create(student1);
    // console.log(student2.name); //sudhir


    // var student1 = {
    //   message: "I LOVE this course!"
    // };
    //
    // var student2 = Object.create(student1);
    // student2.getMessage = function () {
    //   this.message = "Student 1 was paid off by Yaakov to say that!";
    //   return this.message;
    // };
    // var coverUp = student2.getMessage();
    // console.log(student2.message); //op  Student 1 was paid off by Yaakov to say that!

  }

  //function constructor
  function Dog(name){
    this.name = name;
    console.log("'this' is ", this);
  }


//controller 1 and controller 2 examples for scope inheritance
Controller1.$inject=['$scope'];
function Controller1($scope){
  // $scope.parentValue=1
  // $scope.pc = this;
  // $scope.pc.parentValue=1;
  //console.log("Parent Scope ",$scope);
  var parent = this;
  parent.value=1;
}
Controller2.$inject=['$scope'];
function Controller2($scope){
  // console.log("$scope.parentValue ",$scope.parentValue);
  // console.log("Child Scope",$scope);
  //
  // $scope.parentValue =5;
  // console.log("***** changed to 5 *****");
  // console.log("$scope.parentValue : ",$scope.parentValue);
  // console.log("Child Scope",$scope);
  //
  //
  // console.log("$scope.pc.parentValue ",$scope.pc.parentValue);
  // $scope.pc.parentValue=5;
  // console.log("$scope.pc.parentValue : ",$scope.pc.parentValue);
  // console.log("Child Scope",$scope);

  //Note: if we changevalue of a variable in scope of child then it will NOT affect the value in parent scope.
  //AND if we change the value for the Object in child then it will affetc the object in parent controller
  var child=this;
  child.value=2;

  console.log("child scope",$scope);

}


})();
