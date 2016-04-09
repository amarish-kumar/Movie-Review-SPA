//newReviewController.js

(function() {
    "use strict";

    angular.module("moviesApp").controller("newReviewController", newReviewController);

    function newReviewController($scope, $routeParams, $window, movieDataService) {
        $scope.ReviewerRating = 3;
        $scope.max = 5;
        $scope.isReadonly = false;
        $scope.MovieId = null;
        $scope.newReview = {};

        $scope.cancelReview = function () {
            $window.history.back();
        }
        $scope.saveReview = function () {
            movieDataService.addReview($routeParams.Id, $scope.newReview)
                .then(function () {
                    //success
                    toastr.success("Thanks for your feedback!");
                    $window.location = "#/movies";
                },
                    function () {
                        //error
                        toastr.error("Couldn't Save the New Review");
                    });
        };

    }
}());