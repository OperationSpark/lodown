# lodown
An npm functional programming library project

1. Fork this repository to your own GitHub account
2. From the command-line, run the command:
    
        npm init
3. **IMPORTANT CONFIGURATION**: Fill in the prompts with your own details:
    1. When asked for **test command**, enter: `istanbul cover _mocha -- test/ -R spec`
    2. When asked for your **git repository**, provide **your forked GitHub repository's url**.
4. Install the required test libraries by running the following command:
    
        npm install i -D mocha chai sinon istanbul
5. Write your tests in the file `test/index.spec.js`
6. Implement your library in the file `index.js`. Remember that `index.js` is a Node.js module, so you must export your API using, for example:
    
        module.exports.each = each;
7. To run your tests, run the following command:
    
        npm test
8. Check the console output for passes and failures.
9. Preview (Cloud9) or open the file at `coverage/lcov-report/index.html` for your coverage report. Make certain all lines of code are traversed in your tests!

## Solve

Using the file at `test/fixtures/customers.json`, and utilizing your lodown library, write functions that take the Array of customers and return the following:

1. how many males, how many females
2. oldest customer, youngest customer
3. average balance
4. how many customer's names begin with some letter
5. how many customer's friend's names begin with some letter
6. how many customers are friends
7. how many customers have friends in common
8. most common tags

## Resources:

### Docs

1. https://mochajs.org
2. http://chaijs.com/api/bdd/
3. http://sinonjs.org/docs/#spies-api

### Reading
1. http://marcofranssen.nl/using-mocha-chai-sinon-to-test-node-js/
2. http://www.vapidspace.com/coding/2014/10/29/code-coverage-metrics-with-mocha-and-istanbul/
3. https://egghead.io/lessons/javascript-how-to-write-a-javascript-library-setting-up-unit-testing-with-mocha-and-chai
4. https://egghead.io/lessons/javascript-how-to-write-a-javascript-library-unit-testing-with-mocha-and-chai