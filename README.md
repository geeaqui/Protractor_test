# Tecnical Test

### Part 1

Introduction
http://automationpractice.com/ is a dummy ecommerce application that can be used to practice UI automation.

Objective and Task

To test the main functionalities of the website such as creating an account, log-in and completing the purchase flow. This include identifying functionalities that can be tested manually and which can be automated


Scope:
Test the following main functionality of the website:
*	Create Account before and while doing a purchase flow
*	Log-in
*	Log-out
*	Create account with email that is already register
*	Responsiveness of the website

Testing Strategy
*	Familiarise myself with the website by investigating manually each page and functionality mentioned on the scope.
*	Making sure the functionality are working as expected base on the understanding of a normal user who visited the website for the first time
*   Create a basic sanity test template to identify functionality that is working as expected of the user and list of possible defects.

### Part 2
````
Testing strategy
Bug Report - Send on a separate sheet.
````

## Installation

**Prerequisites**:

* node.js v8+
* Protractor (https://www.protractortest.org/#/)

### Part 3
# Running the App

 * Install Protractor globally to your local machine 
 ````
    npm install -g protractor
````

 * Start the server using this command 
 ````
    webdriver-manager start
````

 * Run the test using this command 
 ````
    protractor conf.js
````

#Additional Notes 

### What you found difficult? 
As I have never used protractor before, I would say I have to spend time understanding how the protrator works, file structure, creating the test, using assertion to check the test as working as expected.
### If you had more time what would you do to improve the framework (if anything)
* Using a proper assertion library, because of the time constraint, I have not used an assertion library that I am confident to use rather than using the default assertion that comes with protractor to check each test cases for the expected results.
* Refactor the code to be more cleaner and code resusable.


## Author
Gerald Aqui