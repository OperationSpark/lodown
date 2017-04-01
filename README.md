# lodown
An npm functional programming library project

1. Fork this repository to your own GitHub account.
2. Clone your forked version of the lodown repository to a new Cloud9 workspace or locally if you prefer.
3. To create a `package.json` configuration file for our lodown library, from the command-line, run the command:
    
        npm init
4. **IMPORTANT CONFIGURATION**: Fill in the prompts with your own details:
    0. When asked to name your lodown project, give it the name:
    
        lodown-<my-github-username>
    
    Of course, replace `<my-github-username>` with your actual GitHub username. This will uniquely identify your library when it comes time to release it on `npm` - the last step in this project.

    1. When asked for **test command**, enter:
        
        `istanbul cover _mocha -- test/ -R spec`

    2. When asked for your **git repository**, you will probably be given the correct url as the default, so just select this by pressing `return`, otherwise, provide **your forked GitHub repository's url**.
    
5. Install the required test libraries by running the following command:
    
        npm install i -D mocha chai sinon istanbul

6. Implement your library in the file `index.js`. Remember that `index.js` is a Node.js module, so you must export your API using `module.exports`, for example:
    
        function each(collection, action) {
            // ...code
        }
        module.exports.each = each;

7. Write clear docs for each Function using the proper JavaScript documentation format. You should clearly explain how each Function works, the type of each paramater and how each paramater is used, and explain any return value. It should be evident from your docs you clearly understand how each Function works. Bonus points for listing usage examples in your docs. Example:
    
        /**
         * filter: Designed to filter values in a collection based on a test. 
         * Takes a collection, Array or Object, and passes each value 
         * in the collection through a test Function. The test Function returns 
         * true if the value passes the test, false otherwise. Values that pass 
         * the test are collected and returned in an output Array.
         * 
         * @param {Array or Object} collection: The collection to filter.
         * @param {Function} test: The Function to be applied to each value in 
         * the collection. The test Function must return a Boolean based on some 
         * logic which tests the value given to it.
         * 
         * @return {Array}: An Array containing the filtered collection values. 
         * The Array will contain only the values that passed the test.
         * 
         * Usage: 
         * 
         *      const letters = ['a', 'b', 'b', 'c'];
         *      const onlyBs = filter(letters, function(letter) {
         *          return letter === 'b';
         *      });
         *      console.log(onlyBs); // -> ['b', 'b']
         */
        function filter(collection, test) {
            // ...code
        }
        module.exports.each = each;

8. Once you're done with all Functions and their docs, release your lodown library to `npm` (node package manager), following the steps in this video to do so (using your GitHub username to create a unique name for your library):
    
    <a href="https://docs.npmjs.com/getting-started/publishing-npm-packages" target="_blank">publishing-npm-packages</a>

## Optional: Unit tests

If you want to learn about and create unit tests for your code, write your tests in the file `test/index.spec.js`. Check out the <a href="http://chaijs.com/api/bdd/" target="_blank">chai api for</a> and <a href="http://stackoverflow.com/questions/17526805/chai-test-array-equality-doesnt-work-as-expected" target="_blank">be careful when asserting/expecting against complex types</a> - you'll have to make use of the `.eql` api, and not `.equal`. For example:
    
        expect(lodown.filter([1, 2, 3], function(value) { return value > 2; } )).to.eql([3]);
8. To run your tests, run the following command:
    
        npm test
9. Check the console output for passes and failures.
10. Preview (Cloud9) or open the file at `coverage/lcov-report/index.html` for your coverage report. Make certain all lines of code are traversed in your tests!

### Resources:

#### Docs

1. https://mochajs.org
2. http://chaijs.com/api/bdd/
3. http://sinonjs.org/docs/#spies-api

#### Reading
1. http://marcofranssen.nl/using-mocha-chai-sinon-to-test-node-js/
2. http://stackoverflow.com/questions/19298118/what-is-the-role-of-describe-in-mocha
3. http://www.vapidspace.com/coding/2014/10/29/code-coverage-metrics-with-mocha-and-istanbul/

### Quick Videos
1. https://egghead.io/lessons/javascript-how-to-write-a-javascript-library-setting-up-unit-testing-with-mocha-and-chai
2. https://egghead.io/lessons/javascript-how-to-write-a-javascript-library-unit-testing-with-mocha-and-chai