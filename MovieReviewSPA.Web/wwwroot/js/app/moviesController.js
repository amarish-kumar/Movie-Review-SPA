//moviesController.js

(function () {
    "use strict";
    angular.module("moviesApp").controller("moviesController", moviesController);

    function moviesController($scope,$http) {
        $scope.heading = "Movie Reviews App";
        $scope.data = [];
        
        //Making Spinner On
        $('#loader').show();

        //Setting the delay 
        setTimeout(function() {
            //Fetching the movie
            $http.get("api/movies")
                .then(function(result) {
                    //Success
                    angular.copy(result.data, $scope.data);
                }, function() {
                    console.log("Error Fetching Moives!");
                }).finally(function() {
                    $('#loader').hide();
                });
        }, 1000);
    }
})();