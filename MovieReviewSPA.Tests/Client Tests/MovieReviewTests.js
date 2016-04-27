/// <reference path="c:\rahul\dell\books\mvc6 and angular\moviereviewspa\moviereviewspa.tests\bower_components\jasmine\lib\jasmine-core\jasmine.js" />
/// <reference path="../../moviereviewspa.web/wwwroot/lib/angular/angular.min.js" />
/// <reference path="../../moviereviewspa.web/wwwroot/lib/angular-utils-pagination/dirpagination.js" />
/// <reference path="../../moviereviewspa.web/wwwroot/lib/angular-route/angular-route.min.js" />
/// <reference path="../../moviereviewspa.web/wwwroot/lib/angular-mocks/angular-mocks.js" />
/// <reference path="../../moviereviewspa.web/wwwroot/js/app/app.js" />
/// <reference path="../../moviereviewspa.web/wwwroot/js/service/moviedataservice.js" />
/// <reference path="../../moviereviewspa.web/wwwroot/js/app/moviescontroller.js" />

describe("Movie Review Tests -->", function () {

    beforeEach(function () {
        module("moviesApp");
    });

    //to test individual bits and bytes inside the movie-review-edit
    describe("Movie Data Service --> ", function () {

        it("can load movie reviews", inject(function (movieDataService) {
            //for the 1st Run
            expect(movieDataService.reviews.length).toEqual(0);
        }));
    });

    //$httpbackend service
    var $httpBackend;
    var url = 'api/MovieReviews/1';

    var fakedMovieReviewsResponse = [{
        Id: 1,
        ReviewerName: "Rahul Sahay",
        ReviewerComments: "Awesome Movie. Looks very Nice!",
        ReviewerRating: 5,
        MovieId: 1
    },
            {
                Id: 2,
                ReviewerName: "Nivedita",
                ReviewerComments: "Looking Good. Nice One.Review Updated again",
                ReviewerRating: 4,
                MovieId: 1
            },
            {
                Id: 4,
                ReviewerName: "Tester",
                ReviewerComments: "Checking",
                ReviewerRating: 5,
                MovieId: 1
            },
            {
                Id: 5,
                ReviewerName: "Tester again",
                ReviewerComments: "testing",
                ReviewerRating: 5,
                MovieId: 1
            },
            {
                Id: 6,
                ReviewerName: "Tester Again",
                ReviewerComments: "Testing",
                ReviewerRating: 4,
                MovieId: 1
            }
    ];
    beforeEach(inject(function ($injector) {

        $httpBackend = $injector.get("$httpBackend");

        $httpBackend.whenGET(url)
            .respond(fakedMovieReviewsResponse);

    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    describe("Testing Movie Reviews GET Call", function () {

        it("Loaded Movie Reviews", inject(function (movieDataService) {
            $httpBackend.expectGET(url);
            movieDataService.getReviews(1);
            $httpBackend.flush();
            expect(movieDataService.reviews.length).toEqual(5);
        }));
    });
})
