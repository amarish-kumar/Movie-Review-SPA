//editMovieController.js

(function () {
    "use strict";
    angular.module("moviesApp").controller("editMovieController", editMovieController);

    function editMovieController($scope, $window, $routeParams, movieDataService) {
        $scope.movie = null;
        $scope.MovieId = null;

        //Fetch the Movie by id
        movieDataService.getMovieById($routeParams.Id)
            .then(function(result) {
                    //Success
                    $scope.movie = result;
                },
                function() {
                    //Error
                    toastr.error("Error Fetching Movie with Id:", +$routeParams.Id);
                });

        //Editing the Movie
        setTimeout(function() {
            $scope.editMovie = function() {
                //Making Spinner On
                $('#loader').show();
                movieDataService.movieEdit($scope.movie)
                    .then(function() {
                        //Success
                        toastr.success("Movie Updated Successfully!");
                        $window.location = "#/movies";
                    }, function() {
                        //Error
                        toastr.error("Error in Updating Movie");
                    }).then(function() {
                        $('#loader').hide();
                    });
            }
        }, 1000);
    }

}());