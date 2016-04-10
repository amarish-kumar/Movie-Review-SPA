(function() {
    "use strict";

    angular.module("moviesApp").controller("allReviewsController", allReviewsController);

    function allReviewsController($scope, $window, movieDataService) {
        $scope.reviews = movieDataService;
       
        //Setting Timeout for spinner
        $('#loader').show();
        //Timeout function to show spinner
        setTimeout(function () {
            movieDataService.getReviews()
                .then(function (review) {
                    //Success

                    $scope.reviews = review;
                    toastr.success("Reviews retrieved Successfully");
                }, function () {
                    //Error
                    toastr.error("Error in Fetching Reviews");
                })
                .finally(function () {
                    $('#loader').hide();
                });
        }, 1000);

    }
}());