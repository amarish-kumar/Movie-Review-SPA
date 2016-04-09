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
        //Function to add movie
        var _addMovie=function(newMovie) {
            var deferred = $q.defer();
            $http.post("api/movies", newMovie)
                .then(function(result) {
                    //Success
                    var newlyCreatedMovie = result.data;
                    //Added to the array collection.
                    _movies.splice(0, 0, newlyCreatedMovie);
                    deferred.resolve(newlyCreatedMovie);
                }, function() {
                    //Error
                    deferred.reject();
                });
            return deferred.promise;
        }
        //Function to fetch movie by Id
        var _getMovieById=function(Id) {
            var deferred = $q.defer();
            $http.get('api/movies/' + Id)
            .then(function (result) {
                //Success
                //result.data will return the data back to the caller
                deferred.resolve(result.data);
            }, function () {
                //Error
                deferred.reject();
            });
            return deferred.promise;
        }

        //Editing Movie
        var _movieEdit = function (movie) {
            var deferred = $q.defer();
            $http.put('api/Movies/', movie)
                .then(function () {
                    //Success
                    deferred.resolve();
                }, function () {
                    //Error
                    deferred.reject();
                });
            return deferred.promise;
        }

        //Deleting Movie
        var _removeMovie = function (Id) {
            var deferred = $q.defer();
            $http.delete('api/Movies/' + Id)
                .then(function () {
                    //Success
                    deferred.resolve();
                },
                    function () {
                        //Error
                        deferred.reject();
                    });
            return deferred.promise;
        }


        return {
            movies: _movies,
            getMovies: _getMovies,
            addMovie: _addMovie,
            getMovieById: _getMovieById,
            movieEdit: _movieEdit,
            removeMovie: _removeMovie
        };
    }
}());