//movieDataService.js

(function() {
    "use strict";

    angular.module("moviesApp").factory("movieDataService", movieDataService);

    function movieDataService($http,$q) {
        var _movies = [];

        //Function to retrieve movies
        var _getMovies=function() {
            //For resolving the promise
            var deferred = $q.defer();
            $http.get("api/movies")
                .then(function(result) {
                    //Success
                    //angular.copy copies the collection from source to destination
                    angular.copy(result.data, _movies);
                    deferred.resolve();
                }, function() {
                    //Error
                    deferred.reject();
                });
            return deferred.promise;
        }
        return {
            movies: _movies,
            getMovies: _getMovies
        };
    }
}());