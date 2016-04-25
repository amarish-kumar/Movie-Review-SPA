/// <reference path="../../moviereviewspa.web/wwwroot/js/app/apptest.js" />
/// <reference path="c:\rahul\dell\books\mvc6 and angular\moviereviewspa\moviereviewspa.tests\bower_components\jasmine\lib\jasmine-core\jasmine.js" />

//myAppTest

describe("myapp tests -->", function () {

    //it is sub grouping or group of tests
    it("isDebug", function () {
        expect(myapp.isLocale).toEqual(true);
    });

    it("log", function () {
        expect(myapp.log).toBeDefined();
    });
})

