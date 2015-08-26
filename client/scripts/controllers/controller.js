var app = angular.module("rocketapp", []);


app.controller("mainRocketController", ["$scope",  function($scope) {
    //NOSE CONE - PANEL FROM RIGHT SIDE
    $scope.noseConePanel = function() {
        console.log("panel works!");
    };


    //NOSE CONE - DIALOG BOX POP UP
    $scope.noseConeDialog = function(){
        alert("dialog works!");
    };
}]);


