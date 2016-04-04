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
       
        $routeProvider.otherwise({ templateUrl: "templates/errorView.html" });
        });
})();