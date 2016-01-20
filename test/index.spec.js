var 
    expect = require('chai').expect,
    sinon = require('sinon'),
    lodown = require('../index'),
    customers = require('./fixtures/customers.json');

describe('lodown', function() {
   it('each should be called for each element in an Array', function() {
       var action = sinon.spy();
       lodown.each(customers, action);
       expect(action.callCount).to.equal(customers.length);
       expect(action.calledWith.apply(this, customers));
   });
   
  it('each should be called for each element in collection', function() {
      var action = sinon.spy();
      lodown.each(customers[0], action);
      expect(action.callCount).to.equal(Object.keys(customers[0]).length);
  });
   
});