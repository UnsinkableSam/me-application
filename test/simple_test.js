// const assert = require("assert");
// const webdriver = require("selenium-webdriver");
// const By = require("selenium-webdriver").By;


// var browser = new webdriver.Builder().
//    withCapabilities(webdriver.Capabilities.firefox())
//    .build();

// browser.get("http://localhost:3000/");


// // Two different ways to work with promises
// // Way 1
// let promise = browser.getTitle();

// promise.then(function (title) {
//    console.log(title);
// });

// // Way 2
// browser.findElement(By.id('3')).then(function (image) {
//    image.getAttribute('innerHTML').then( (html) => {
//       console.log(html);
//       assert.ok(true);
//       assert(html === "<a> Login</a>", "granted");
//    })
   
// });