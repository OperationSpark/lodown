(function(root) {
    'use strict';
    
    const _ = {};
    
    // YOU KNOW WHAT TO DO //
    
    /**
     * each: Designed to loop over a collection, Array or Object, and applies the 
     * action Function to each value in the collection.
     * 
     * @param {Array or Object} collection: The collection over which to iterate.
     * @param {Function} action: The Function to be applied to each value in the 
     * collection
     * 
     * Usage:
     * 
     *      const arr = [1, 2, 3, 4, 5];
     *      function multiplyBy5(item, loc, collection) {
     *          console.log(item * 5);
     *      }
     *      each(arr, multiplyeBy5);    //-> 5, 10, 15, 20, 25
     */
    _.each = function(collection, action) {
        if (Array.isArray(collection)) {
            for (var i = 0; i < collection.length; i++) {
                action(collection[i], i, collection);
            }
        }
        else {
            for (var key in collection) {
                action(collection[key], key, collection);
            }
        }
    }
    
    
    
    
    
    // YOUR CODE ABOVE HERE //
    
    
    //////////////////////////////////////////////////////////////////////////
    ///////// DO NOT DELETE //////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////
    if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        module.exports = _;
    }
    else if (root) {
        root._ = _;
    }
}(this));