//newMovieController.js
(function () {
    "use strict";

    angular.module("moviesApp").controller("newMovieController", newMovieController);

    function newMovieController($scope, movieDataService, $window) {
        $scope.newMovie = {};

       //Setting the delay 
        setTimeout(function () {
            $scope.save = function () {
                //Making Spinner On
                $('#loader').show();
                movieDataService.addMovie($scope.newMovie)
                    .then(function () {
                        //Success
                        toastr.success("Movie Saved Successfully");
                        //Once Saved successfully return to the movies page 
                        $window.location = "#/movies";
                    }, function () {
                        //Error
                        toastr.error("Error in saving Movie");
                    }).then(function () {
                        $('#loader').hide();
                    });
            }
        }, 1000);
    }
}());