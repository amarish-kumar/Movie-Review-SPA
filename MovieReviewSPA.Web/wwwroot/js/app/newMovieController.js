//newMovieController.js
(function () {
    "use strict";

    angular.module("moviesApp").controller("newMovieController", newMovieController);

    function newMovieController($scope, $http, $window) {
        $scope.newMovie = {};
        $scope.save = function () {
            $http.post('api/movies', $scope.newMovie)
                .then(function (result) {
                    //Success
                    var newMovie = result.data;
                    toastr.success("Movie Saved Successfully");

                    //Once Saved successfully return to the movies page 
                    $window.location = "#/movies";

                }, function () {
                    //Error
                    toastr.error("Unable to save the movie");
                });
        }

    }
}());