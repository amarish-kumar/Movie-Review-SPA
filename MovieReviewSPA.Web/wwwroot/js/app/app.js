//app.js

(function() {
    "use strict";
    angular.module("moviesApp", ["ngRoute", "angularUtils.directives.dirPagination"])
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

        $routeProvider.when("/editReview/:Id", {
            controller: "editReviewController",
            templateUrl: "/templates/editReviewView.html"
        });

        $routeProvider.when("/aboutApp", {
            controller: "",
            templateUrl: "/templates/aboutApp.html"
        });

        $routeProvider.when("/aboutMe", {
            controller: "",
            templateUrl: "/templates/aboutMe.html"
        });

        $routeProvider.otherwise({ templateUrl: "templates/errorView.html" });
        });
})();