//editReviewController.js

(function () {
    "use strict";

    angular.module("moviesApp").controller("editReviewController", editReviewController);

    function editReviewController($scope,$routeParams,$window, movieDataService) {

        //Fetching the Review by id and setting  $scope.review
        $('#loader').show();
        setTimeout(function () {
            movieDataService.getReviewByReviewerId($routeParams.Id)
             .then(function (result) {
                 $scope.review = result;
             },
             function () {
                 toastr.error("Unable to Fetch the review");
             }).finally(function () {
                 $('#loader').hide();
             });
        }, 1000);

        //Editing the review
        setTimeout(function () {
            $scope.editReview = function () {
                //Making Spinner On
                $('#loader1').show();
                movieDataService.updateReview($scope.review)
                    .then(function () {
                        //success
                        toastr.success("Review edited Successfully");
                        $window.location = "#/movies";

                    },
                        function () {
                            //error
                            toastr.error("Error in editing the Review");
                        }).finally(function () {
                            $('#loader1').hide();
                        });
            }
        }, 1000);
    }
}());