var app = angular.module("rocketapp", []);


app.controller("mainRocketController", ["$scope",  function($scope) {
    //NOSE CONE - PANEL FROM RIGHT SIDE
    $scope.noseConePanel = function() {
        console.log("nose cone panel works!");
    };

    //NOSE CONE - DIALOG BOX POP UP
    $scope.noseConeDialog = function(){
        alert("nose cone dialog works!");
    };

    //BODY TUBE - PANEL FROM TOP SIDE
    $scope.bodyTubePanel = function() {
        console.log("body tube panel works!");
    };

    //BODY TUBE - DIALOG BOX POP UP
    $scope.bodyTubeDialog = function(){
        alert("body tube dialog works!");
    };

    //FIN - PANEL FROM BOTTOM SIDE
    $scope.finPanel = function() {
        console.log("fin panel works!");
    };

    //FIN - DIALOG BOX POP UP
    $scope.finDialog = function(){
        alert("fin dialog works!");
    };

    //ENGINE - PANEL FROM LEFT SIDE
    $scope.enginePanel = function() {
        console.log("engine panel works!");
    };

    //ENGINE - DIALOG BOX POP UP
    $scope.engineDialog = function(){
        alert("engine dialog works!");
    };







}]);


