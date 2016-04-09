//app.js

(function() {
    "use strict";
    angular.module("moviesApp", ["ngRoute"])
    .config(function ($routeProvider) {
        $routeProvider.when("/", {
            controller: "moviesController",
            templateUrl: "templates/homeView.html"
        });

        $routeProvider.when("/movies", {
            controller: "moviesListController",
            templateUrl: "templates/moviesView.html"
        });

        $routeProvider.when("/newMovie", {
            controller: "newMovieController",
            templateUrl: "templates/newMovieView.html"
        });
       
        $routeProvider.when("/editMovie/:Id", {
            controller: "editMovieController",
            templateUrl: "templates/editMovieView.html"
        });

        $routeProvider.when("/deleteMovie/:Id", {
            controller: "deleteMovieController"
        });

        $routeProvider.when("/reviews/:Id", {
            controller: "reviewsController",
            templateUrl: "/templates/reviewsView.html"
        });

        $routeProvider.when("/newReview/:Id", {
            controller: "newReviewController",
            templateUrl: "/templates/newReviewView.html"
        });


        $routeProvider.otherwise({ templateUrl: "templates/errorView.html" });
        });
})();