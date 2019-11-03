/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the feedreader application.
 */

/* All tests were placed within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* Test Suite: RSS Feed
    * This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* tests that ensure the allFeeds variable has been defined
         * and that it is not empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('URLs are defined', function() {
             allFeeds.forEach(function(feed) {
               expect(feed.url).toBeDefined();
               expect(feed.url.length).not.toBe(0);
             });

         });

        /* test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('names are defined', function() {
             allFeeds.forEach(function(feed) {
               expect(feed.name).toBeDefined();
               expect(feed.name.length).not.toBe(0);
             });

         });
    });


    /* Test suite: The Menu
    * This suite is all about the Menu state
    * in our application.
    */
    describe('The Menu', function() {
      /* test that ensures the menu element is
       * hidden by default.
       */
       const body = document.querySelector('body');

        it('is initially hidden', function() {
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });


        /* test that ensures the menu changes
         * visibility when the menu icon is clicked.
         */
         it('toggles visibility', function() {
             $('.menu-icon-link').trigger('click');
             expect(body.classList.contains('menu-hidden')).toBe(false);

             $('.menu-icon-link').trigger('click');
             expect(body.classList.contains('menu-hidden')).toBe(true);

         });
    });



    /* Test Suite: Initial Entries
    * This suite is about the initial state of the RSS
    * feeds.
    */
    describe('Initial Entries', function() {
      /* test that ensures when the asynchronous loadFeed
       * function is called and completes its work, there is at least
       * a single .entry element within the .feed container.
       */
       let feed;

       beforeEach(function(done) {
         loadFeed(0,function() {
           feed = $('.feed').children();
           done();
         });
       });

       it('should not be empty', function(done) {
           expect(feed.length).not.toBe(0);
           done();
       });
    });


    /* Test Suite: New Feed Selection
    *  This suite is about the new feed selection.
    */
    describe ('New Feed Selection', function() {
      /* test that ensures when a new feed is loaded
       * by the loadFeed function that the content actually changes.
       */
       let defaultFeed,
           newFeed;

       beforeEach(function(done) {
         loadFeed(0,function() {
           defaultFeed = $('.feed').children();
           loadFeed(1,function() {
             newFeed = $('.feed').children();
             done();
           });
         });
       });

       it('should change content', function(done) {
           expect(newFeed).not.toEqual(defaultFeed);
           done();
       });
    });

}());
