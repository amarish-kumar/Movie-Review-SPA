//moviesController.js

(function () {
    "use strict";
    angular.module("moviesApp").controller("moviesController", moviesController);

    function moviesController($scope, movieDataService) {
        $scope.heading = "Movie Reviews App";
        $scope.data = movieDataService;
        
        //Making Spinner On
        $('#loader').show();

        //Setting the delay 
        setTimeout(function() {
            //Fetching the movie
            movieDataService.getMovies()
                .then(function() {
                    //Success
                    console.log($scope.data);
                    toastr.success("Movies Fetched Successfully");
                }, function() {
                    //Error
                    toastr.error("Error in fetching movies");
                }).finally(function() {
                    $('#loader').hide();
                });
        }, 1000);
    }
})();