/**
 * @see http://www.chaijs.com/guide/styles/#should
 */

'use strict';

const should = require('chai').should();

import '../src/js/values.js';

describe('values', function() {
    it('should exists', function() {
        should.exist(Object.prototype.values);
    });

    it('should return the values of the object', function() {
        ({a: 1, b: 2, c: 3}).values().should.deep.equal([1, 2, 3]);
    });

    it('should return the values of the object as an array', function() {
        ({a: 1, b: 2, c: 3}).values().should.be.a('array');
    });

    it('should return an empty array if the object is empty', function() {
        ({}).values().should.deep.equal([]);
    });

    it('should return an empty array if the object is empty as an array', function() {
        ({}).values().should.be.a('array');
    });

    it('should return the values of the array', function() {
        [1, 2, 3].values().should.deep.equal([1, 2, 3]);
    });
    
    it('should return the values of the array as an array', function() {
        [1, 2, 3].values().should.be.a('array');
    });

    it('should return an empty array if the array is empty', function() {
        [].values().should.deep.equal([]);
    });

    it('should return an empty array if the array is empty as an array', function() {
        [].values().should.be.a('array');
    });
});
