//reviewsController.js

(function() {
    "use strict";
    angular.module("moviesApp").controller("reviewsController", reviewsController);

    function reviewsController($scope, $routeParams, $window, movieDataService) {
        $scope.reviews = null;
        $scope.MovieId = null;

        //Setting Timeout for spinner
        $('#loader').show();
        //Timeout function to show spinner
        setTimeout(function() {
            movieDataService.getReviewById($routeParams.Id)
                .then(function(review) {
                    //Success

                    $scope.reviews = review;
                    $scope.MovieId = $routeParams.Id;
                    toastr.success("Reviews retrieved Successfully");
                }, function() {
                    //Error
                    toastr.error("Error in Fetching Reviews");
                })
                .then(function() {
                    $('#loader').hide();
                });
        }, 1000);
    }

}());