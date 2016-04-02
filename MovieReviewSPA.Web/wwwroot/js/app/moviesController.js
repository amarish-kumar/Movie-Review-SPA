//moviesController.js

(function () {
    "use strict";
    angular.module("moviesApp").controller("moviesController", moviesController);

    function moviesController($scope) {
        $scope.heading = "Movie Reviews App";
        $scope.data = [
         {
             MovieName: "Star Wars: Episode VII",
             DirectorName: " J.J. Abrams ",
             ReleaseYear: "2015",
             NoOfReviews: "35"
         },
        {
            MovieName: "Avatar",
            DirectorName: "James Cameron",
            ReleaseYear: "2009",
            NoOfReviews: "25"
        },
        {
            MovieName: "Titanic",
            DirectorName: "James Cameron",
            ReleaseYear: "1997",
            NoOfReviews: "21"
        },
        {
            MovieName: "Die Another Day",
            DirectorName: "Lee Tamahori",
            ReleaseYear: "1997",
            NoOfReviews: "19"
        },
        {
            MovieName: "Godzilla",
            DirectorName: "Gareth Edwards",
            ReleaseYear: "2014",
            NoOfReviews: "17"
        }

        ];
    }
})();