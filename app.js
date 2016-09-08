var app=angular.module('kisiApp' , []);
app.controller('kisiCtrl' , function($scope,$http){
    $http.get('kisiler.json').then(function(response){
        $scope.kisiler=response.data;

    });

    $scope.order="ad";


});

