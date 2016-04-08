//newMovieController.js
(function() {
    "use strict";

    angular.module("moviesApp").controller("newMovieController", newMovieController);

    function newMovieController($scope) {
        $scope.newMovie = {};
        $scope.save = function () {
            toastr.success("Movie Saved Successfully");
        }

    }
}());