
"use strict";



const assert = require("assert");
const test = require("selenium-webdriver/testing");
const webdriver = require("selenium-webdriver");
const By = webdriver.By;

let browser;


test.describe("Me-application", function () {
    test.beforeEach(function (done) {
        this.timeout(20000);
        browser = new webdriver.Builder().
            withCapabilities(webdriver.Capabilities.firefox()).build();

        browser.get("http://localhost:3000/");
        done();
    });

    test.afterEach(function (done) {
        browser.quit();
        done();
    });


    function goToNavLink(target) {
        browser.findElement(By.linkText(target)).then(function (element) {
            element.click();
        });
    }


    function assertH1DropDown(target) {
        browser.get("http://localhost:3000/reports/week/1");
        browser.findElement(By.css("h1")).then(function (element) {
            element.getText().then(function (text) {
                assert.equal(text, target);
            });
        });
    }
    

    function matchUrl(target) {
        browser.getCurrentUrl().then(function (url) {
            assert.ok(url.endsWith("localhost:3000/" + target));
        });
    }

    function assertH1(target) {
        browser.findElement(By.css("h1")).then(function (element) {
            element.getText().then(function (text) {
                assert.equal(text, target);
            });
        });
    }


    function assertA(target) {
        browser.findElement(By.css("a")).then(function (element) {
            element.getText().then(function (text) {
                assert.equal(text, target);
            });
        });
    }



    test.it("Test index", function (done) {
        let promise = browser.getTitle();

        promise.then(function (title) {
            assert.equal(title, "Me-applikation");
        });

        browser.getTitle().then(function (title) {
 
            assert.equal(title, "Me-applikation");
        });

        assertH1("Om mig");
        matchUrl("");

        done();
    });



    test.it("Test go to Register", function (done) {

        goToNavLink("Register");

        assertH1("Register");
        matchUrl("Register/register/");

        done();
    });


    test.it("Test go to Report 1", function (done) {

        assertH1DropDown("1")
        matchUrl("reports/week/1");

        done();
    });
});
