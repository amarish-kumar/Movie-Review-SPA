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

        $routeProvider.otherwise({ templateUrl: "templates/errorView.html" });
        });
})();