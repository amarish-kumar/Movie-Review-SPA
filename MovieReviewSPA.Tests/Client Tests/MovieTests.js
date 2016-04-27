/// <reference path="c:\rahul\dell\books\mvc6 and angular\moviereviewspa\moviereviewspa.tests\bower_components\jasmine\lib\jasmine-core\jasmine.js" />
/// <reference path="../../moviereviewspa.web/wwwroot/lib/angular/angular.min.js" />
/// <reference path="../../moviereviewspa.web/wwwroot/lib/angular-utils-pagination/dirpagination.js" />
/// <reference path="../../moviereviewspa.web/wwwroot/lib/angular-route/angular-route.min.js" />
/// <reference path="../../moviereviewspa.web/wwwroot/lib/angular-mocks/angular-mocks.js" />
/// <reference path="../../moviereviewspa.web/wwwroot/lib/jquery/dist/jquery.min.js" />
/// <reference path="../../moviereviewspa.web/wwwroot/js/app/app.js" />
/// <reference path="../../moviereviewspa.web/wwwroot/js/service/moviedataservice.js" />
/// <reference path="../../moviereviewspa.web/wwwroot/js/app/moviescontroller.js" />


//MovieTests

describe("Movies Tests-->", function () {

    //instantiate the module 1st
    beforeEach(function () {
        module("moviesApp");
    });

    //to test individual bits and bytes inside the home-Index
    describe("Movie Data Service -->", function () {
        it("can load movies", inject(function (movieDataService) {
            //for the 1st Run
            expect(movieDataService.getMovies.length).toEqual(0);
        }));
    });

    //$httpbackend service
    var $httpBackend;
    var url = 'api/movies';
    
    var fakedMoviesResponse=[{
        Id: 1,
        MovieName: "Godzilla",
        DirectorName: "Gareth Edwards",
        ReleaseYear: "2014",
        NoOfReviews: 6
    },
            {
                Id: 3,
                MovieName: "Titanic",
                DirectorName: "James Cameron",
                ReleaseYear: "1997",
                NoOfReviews: 3
            },
            {
                Id: 4,
                MovieName: "Die Another Day",
                DirectorName: "Lee Tamahori",
                ReleaseYear: "2002",
                NoOfReviews: 0
            },
            {
                Id: 7,
                MovieName: "Taken 3",
                DirectorName: "Olivier Megaton",
                ReleaseYear: "2014",
                NoOfReviews: 0
            },
            {
                Id: 9,
                MovieName: "Top Gun",
                DirectorName: "Tony Scott",
                ReleaseYear: "1986",
                NoOfReviews: 0
            }
    ];
    beforeEach(inject(function ($injector) {

        $httpBackend = $injector.get("$httpBackend");

        $httpBackend.whenGET(url)
            .respond(fakedMoviesResponse);
        
    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });
    //test the backend call
    
    describe("Testing Movies GET Call-->", function () {

        it("Loaded Movies", inject(function (movieDataService) {
            $httpBackend.expectGET(url);
            movieDataService.getMovies();
            $httpBackend.flush();
            expect(movieDataService.movies.length).toEqual(5);
        }));
    });

    //Controller Tests
    describe("Testing Movies Controller-->", function () {

        it("Load Movies", inject(function ($controller, $http, movieDataService) {

            var scopeObj = {};

            $httpBackend.expectGET(url);

            var ctrl = $controller("moviesController", {
                $scope: scopeObj,
                $http: $http,
                movieDataService: movieDataService
            });

            movieDataService.getMovies();
            $httpBackend.flush();
            expect(ctrl).not.toBeNull();
            expect(scopeObj.data).toBeDefined();
        }));
    });

})


