var 
    expect = require('chai').expect,
    sinon = require('sinon'),
    lodown = require('../index'),
    customers = require('./fixtures/customers.json');

describe('lodown', function() {
    describe('each', function() {
        it('should iterate an Array, applying action to each element, index of the element, and the collection', function() {
            var action = sinon.spy();
            lodown.each(customers, action);
            expect(action.callCount).to.equal(customers.length);
            customers.forEach(function(customer, index){
               expect(action.calledWith(customer, index, customers)).to.be.true;
            });
        });
   
        it('should iterate an Object, applying action for each value, key of value, and Object', function() {
            var action = sinon.spy();
            var customer = customers[0];
            lodown.each(customer, action);
            expect(action.callCount).to.equal(Object.keys(customer).length);
            for(var key in customer) {
              expect(action.calledWith(customer[key], key, customer)).to.be.true;
            }
        });
    });
    
    describe('filter', function() {
        it('filter should filter Array items based on test provided', function () {
            expect(lodown.filter([1, 2, 3], function(value) { return value > 2; } )).to.eql([3]);
        });
        it('filter should filter Object values based on test provided', function() {
            expect(lodown.filter({one: 'one', two: 'two', three: 'three'}, function(value) { return value[0] === 't' })).to.eql(['two', 'three']);
        });
    });
    
    describe('map', function() {
        it('map should create an Array of transformations for each value in an Array', function () {
            expect(lodown.map([1, 2, 3], function(value) { return value + 1; } )).to.eql([2, 3, 4]);
        });
        it('map should create an Array of transformations for each value in an Object', function() {
            expect(lodown.map({one: 'one', two: 'two', three: 'three'}, function(value) { return value.toUpperCase(); })).to.eql(['ONE', 'TWO', 'THREE']);
        });
    });
    
    describe("identity", function() {
        it('identity should return the value passed to it, including types Number, String, Boolean, Array, Object, Function', function(){
            expect(lodown.identity(1)).to.equal(1);
            expect(lodown.identity('identity')).to.equal('identity');
            expect(lodown.identity({a: "one"})).to.eql({a: "one"});
            expect(lodown.identity([1,2,3])).to.eql([1,2,3]);
            var fn = function() {  };
            expect(lodown.identity(fn)).to.eql(fn);
        });
    });
});


// QUnit.test("_.typeof()", function(assert) {
//   assert.strictEqual(_.typeOf("a"), "string", "Should handle strings.");
//   assert.strictEqual(_.typeOf(10), "number", "Should handle numbers.");
//   assert.strictEqual(_.typeOf([1,3]), "array", "Should handle arrays.");
//   assert.strictEqual(_.typeOf({a: "one"}), "object", "Should handle objects.");
//   assert.strictEqual(_.typeOf(false), "boolean", "Should handle booleans.");
//   assert.strictEqual(_.typeOf(undefined), "undefined", "Should handle undefined.");
//   assert.strictEqual(_.typeOf(null), "null", "Should handle null.");
//   assert.strictEqual(_.typeOf(function(){}), "function", "Should handle functions.");
// });

// QUnit.test("_.first()", function(assert){
//     assert.deepEqual(_.first(["a","b","c"]) ,"a", "Should return the first element.");
//     assert.deepEqual(_.first(["a","b","c"], 2) ,["a","b"], "Should accept a length argument.");
//     assert.deepEqual(_.first(["a","b","c"], -1) ,[], "Should return empty list if length is not a positive number.");
//     assert.deepEqual(_.first(["a","b","c"], 5) ,["a","b","c"], "Should return the whole array if length is longer than the array's length.");
//     assert.deepEqual(_.first({a:"b"}, 2), [], "Should return empty array if the array param is not an array.");
// });

// QUnit.test("_.last()", function(assert){
//     assert.deepEqual(_.last(["a","b","c"]) ,"c", "Should return the last element.");
//     assert.deepEqual(_.last(["a","b","c"], 2) ,["b","c"], "Should accept a length argument.");
//     assert.deepEqual(_.last(["a","b","c"], -1) ,[], "Should return empty list if length is not a positive number.");
//     assert.deepEqual(_.last(["a","b","c"], 5) ,["a","b","c"], "Should return the whole array if length is longer than the array's length.");
//     assert.deepEqual(_.last({a:"b"}, 2), [], "Should return empty array if the array param is not an array.");
// });