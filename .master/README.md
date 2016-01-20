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
9. Preview (Cloud9) or open the file at `coverage/lcov-report/index.html` for your coverage report.