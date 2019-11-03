/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('URLs are defined', function() {
             allFeeds.forEach(function(feed){
               expect(feed.url).toBeDefined();
               expect(feed.url.length).not.toBe(0);// TODO: Way to only check if 1st one passes?
             });

         });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('names are defined', function() {
             allFeeds.forEach(function(feed){
               expect(feed.name).toBeDefined();
               expect(feed.name.length).not.toBe(0);
             });

         });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The Menu', function() {
      /* TODO: Write a test that ensures the menu element is
       * hidden by default. You'll have to analyze the HTML and
       * the CSS to determine how we're performing the
       * hiding/showing of the menu element.
       */
       const body = document.querySelector('body');

        it('is initially hidden', function() {
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });


        /* TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
         it('visibility changes', function() {
             $('.menu-icon-link').trigger('click');
             expect(body.classList.contains('menu-hidden')).toBe(false);

             $('.menu-icon-link').trigger('click');
             expect(body.classList.contains('menu-hidden')).toBe(true);

         });
    });



    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
      /* TODO: Write a test that ensures when the loadFeed
       * function is called and completes its work, there is at least
       * a single .entry element within the .feed container.
       * Remember, loadFeed() is asynchronous so this test will require
       * the use of Jasmine's beforeEach and asynchronous done() function.
       */
       const feed = document.querySelector('.feed');

       beforeEach(function(done) {
         loadFeed(0,function() {
           //console.log(feed);
           done();
         });
       });

       it('should not be empty', function(done) {
           expect(feed.length).not.toBe(0);
           done();
       });
    });


    /* TODO: Write a new test suite named "New Feed Selection" */
    describe ('New Feed Selection', function() {
      /* TODO: Write a test that ensures when a new feed is loaded
       * by the loadFeed function that the content actually changes.
       * Remember, loadFeed() is asynchronous.
       */
       let feedList,
             feed,
             feedLinks;

       beforeEach(function(done) {
         feedList = document.querySelector('.feed-list');
         feed = document.querySelector('.feed');


         loadFeed(0,function() {
           feedLinks = feed.querySelectorAll('a');
           loadFeed(1,function() {
             done();
           });
         });
       });

       it('should change content', function(done) {
           let currentfeedLinks = feed.querySelectorAll('a');
           console.log(currentfeedLinks[0]);
           console.log(feedLinks[0]);
           expect(currentfeedLinks[0]).not.toBe(feedLinks[0]);
           expect(currentfeedLinks[currentfeedLinks.length-1]).not.toBe(feedLinks[feedLinks.length-1]);
           done();
       });
    });
  //  });

}());
