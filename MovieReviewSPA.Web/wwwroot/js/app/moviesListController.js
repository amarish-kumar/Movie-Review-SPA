//moviesListController.js

(function () {
    "use strict";
    angular.module("moviesApp").controller("moviesListController", moviesListController);

    function moviesListController($scope, movieDataService, $window, canRemove) {
        $scope.heading = "Movie Reviews App";
        $scope.data = movieDataService;
        $scope.canRemove = canRemove;

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

        //Deleting Movie
        $scope.deleteMovie = function (Id) {
            bootbox.confirm({
                size: 'medium',
                message: "Are you sure ?",
                callback: function (response) {
                    if (response) {
                        movieDataService.removeMovie(Id)
                            .then(function () {
                                //Success
                                toastr.success("Movie Deleted Successfully!");
                                $window.location = "#/";
                            }, function (err) {
                                //Error
                                //TODO Fisrt delete all the reviews associated with Movie
                                toastr.error("Error Deleting Movie!");
                            });
                    }
                }
            });
        }
    }
})();