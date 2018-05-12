/**
 * @see http://www.chaijs.com/guide/styles/#should
 */

'use strict';

const should = require('chai').should();

import '../src/js/values.js';

describe('values', function() {
    describe('it should exists', function() {
        should.exist(Object.prototype.values);
    });

    describe('it should return the values of the object', function() {
        ({a: 1, b: 2, c: 3}).values().should.deep.equal([1, 2, 3]);
    });

    describe('it should return the values of the object as an array', function() {
        ({a: 1, b: 2, c: 3}).values().should.be.a('array');
    });

    describe('it should return an empty array if the object is empty', function() {
        ({}).values().should.deep.equal([]);
    });

    describe('it should return an empty array if the object is empty as an array', function() {
        ({}).values().should.be.a('array');
    });

    describe('it should return the values of the array', function() {
        [1, 2, 3].values().should.deep.equal([1, 2, 3]);
    });
    
    describe('it should return the values of the array as an array', function() {
        [1, 2, 3].values().should.be.a('array');
    });

    describe('it should return an empty array if the array is empty', function() {
        [].values().should.deep.equal([]);
    });

    describe('it should return an empty array if the array is empty as an array', function() {
        [].values().should.be.a('array');
    });
});
