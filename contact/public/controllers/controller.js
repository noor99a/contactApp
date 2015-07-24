var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");
var refresh = function  () {
 $http.get('/contactlist' ).success(function(response) {
  console.log('i got the data i req');
  $scope.contactlist =response;
  $scope.contact ="";
  $scope.showUpdate = false;
  $scope.hideAdd = false;
});
};

refresh(); 

$scope.addContact = function(){
  console.log($scope.contact);
  $http.post('/contactlist', $scope.contact).success(function(response) {
   console.log(response);
   refresh(); 
  });
};
$scope.remove = function (id){
  $http.delete('/contactlist/' + id).success(function  (response) {
    refresh();
    
  });

};

$scope.edit = function (id) {
  console.log(id);
  $http.get('/contactlist/' +id).success(function  (response) {
    $scope.contact =response;
      });
  $scope.showUpdate = true;
  $scope.hideAdd = true;
  // body...
};

$scope.update = function (id) {
  
  $http.put('/contactlist/' + $scope.contact._id, $scope.contact).success(function  (response) {
     refresh();
     clear();
      });

};

var clear = function  () {
  $scope.contact ="";
};

$scope.clears = function (){
     refresh();
     clear();
};

}]);﻿