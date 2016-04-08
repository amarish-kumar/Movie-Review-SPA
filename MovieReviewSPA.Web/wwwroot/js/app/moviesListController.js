//moviesListController.js

(function () {
    "use strict";
    angular.module("moviesApp").controller("moviesListController", moviesListController);

    function moviesListController($scope, movieDataService) {
        $scope.heading = "Movie Reviews App";
        $scope.data = movieDataService;

        //Making Spinner On
        $('#loader').show();

        //Setting the delay 
        setTimeout(function () {
            //Fetching the movie
            movieDataService.getMovies()
                .then(function () {
                    //Success
                    toastr.success("Movies Fetched Successfully");
                }, function () {
                    toastr.error("Error in fetching movies");
                }).finally(function () {
                    $('#loader').hide();
                });
        }, 1000);
    }
})();