//reviewsController.js

(function() {
    "use strict";
    angular.module("moviesApp").controller("reviewsController", reviewsController);

    function reviewsController($scope, $routeParams, $window, movieDataService, canRemove) {
        $scope.reviews = null;
        $scope.MovieId = null;
        $scope.canRemove = canRemove;

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
                .finally(function() {
                    $('#loader').hide();
                });
        }, 1000);

        //Deleting Review
        $scope.deleteReview = function (Id) {
            bootbox.confirm({
                size: 'medium',
                message: "Are you sure ?",
                callback: function (response) {
                    if (response) {
                        movieDataService.removeReview(Id)
                            .then(function () {
                                //Success
                                toastr.success("Review Deleted Successfully!");
                                $window.location = "#/movies";
                            }, function (err) {
                                //Error
                                //TODO First delete all the reviews associated with Movie
                                toastr.error("Error Deleting Movie!");
                            });
                    }
                }
            });
        }
    }

}());