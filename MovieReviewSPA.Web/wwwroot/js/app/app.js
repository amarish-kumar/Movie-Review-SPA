//app.js

(function() {
    "use strict";
    angular.module("moviesApp", ["ngRoute"])
    .config(function ($routeProvider) {
        $routeProvider.when("/", {
            controller: "moviesController",
            templateUrl: "templates/homeView.html"
        });
        $routeProvider.otherwise({ templateUrl: "templates/errorView.html" });
        });
})();