# FeedReader Application Test Suite

## Table of Contents


* [Installation](#installation)
* [Instructions](#instructions)
* [Feed Reader Application](#feedreaderapplication)
* [Application Test Suites](#applicationtestsuites)
* [Contributing](#contributing)

This project involves testing a web-based application that reads RSS feeds utilizing using the Google Feed Reader API. The intent of this project, is to practice and become accustom to leveraging testing libraries, such as Jasmine, to fuel JavaScript test-driven development. This project was created as part of the [Udacity Front-end Nanaodegree] program.


## Installation

 Download the [zip] from GitHub or clone from the repository
 ```sh
 $ git clone https://github.com/katriJS/fend-prjt-feedreader-test.git
 ```

## Feed Reader Application

  Open index.html in your browser of choice to run the Feed Reader Application.


## Application Test Suites

To view the results of the test, with the index.html open in the browser, please scroll the the bottom of the page.

The following test suites each contain a set of tests that are related to the RSS feeds definitions, allFeeds variable, menu visibility and basic feed functionality within in the application, respectively.

#### RSS Feeds
| Test | Description |
| ------ | ------ |
| Are Defined | Ensure that the `allFeeds` variable has been defined and that it is not empty |
| URLs are Defined | Ensures all feeds have a URL defined and that the URL is not empty |
| Names are Defined | Ensures each feeds has a name defined and that the name is not empty |


#### The Menu
| Test | Description |
| ------ | ------ |
| Is Initially Hidden | Ensure the menu element is hidden by default |
| Visibility Changes | Ensures the menu changes visibility when the menu icon is clicked |


### Initial Entries
| Test | Description |
| ------ | ------ |
| Should not be Empty | Ensure there is at least a single `.entry` element within the `.feed` container |

### New Feed Selection
| Test | Description |
| ------ | ------ |
| Should Change Content | Ensure when a new feed is loaded by the `loadFeed` function that the content actually changes |



## Contributing

This repository is for a Udacity FEND project. Therefore, pull requests are not accepted.


[//]: # (reference links)

   [Udacity Front-end Nanaodegree]: <https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011>
   [zip]: <https://github.com/katriJS/fend-prjt-feedreader-test/archive/master.zip>
