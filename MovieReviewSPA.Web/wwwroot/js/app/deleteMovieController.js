//deleteMovieController.js

(function() {
    "use strict";

    angular.module("moviesApp").controller("deleteMovieController", deleteMovieController);

    function deleteMovieController($scope, movieDataService) {
        $scope.deleteMovie = function () {
            bootbox.confirm({
                size: 'small',
                message: "Are you sure?",
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
}());