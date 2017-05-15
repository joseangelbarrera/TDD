# TDD

***Test Driven Development***

## Javascript Unit Testings

A Unit testing is a piece of code that serves to check if another piece of code works properly.

These unit testings should:

* be able of launching them automatically (this is specially important for a continuous integration)

* test the maximum code possible (code coverage as high as possible). (Code ceverego - the coverege of the TDD code. As much code coverage, better)

* be able of be executed as many times as needed

* be independent. The execution of one test, shouldn't affect the execution of the other.

* maintain the quality of the code (code convention, good practices, documentation,...)

As long as the source code in a project grows, it gets more and more important being able to check in a simple way that changes or new code doesn't break the existing code

In Javascript this is even more important, because having the tests we can check automatically that our code works well in different environments (IE, Firefox, Chrome,...)


KARMA: it a sofware to prove javascript in different browsers.

Unit testing as more sense if they are refactoring (improve the code)

TDD
It is a metodoplgy to work. First made the test and the the code that pass he test.


The recommended workflow in TDD is:

- We write tests for a new feature (assuming method names, input parameters, returned values...)
- We execute tests and check they fail (we still haven't written the code to be tested)
- We write the most simple solution that pass the tests
- We refactor the code (cleaner and more efficient code that still pass the tests)
- We repeat these steps for another feature


***The test file delivered can also be acalled 'specs'***


###Behavior Driven Development (BDD)

BDD (Behavior Driven Development) is a specialized version of TDD that is more focused on testing (specifications of) behaviours of software

It uses a more human language to write the tests and is not focused as much in how the API should work and more in testing the specific feature does what is expected to

##3.- Testing Frameworks

###Jasmine
### Mocha
###QUnit


###Jasmine
A test suite in Jasmine is declared as a global function describe that recevies:

see the notes

***the name of the suite***
a function with code that implements the test
The specs are declared with the global function it that receives:

***a description of the specification***
a function with one or more expectations


***Overcomplexity***
This means to do more taht is necesary
