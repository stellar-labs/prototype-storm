/**
 * @see http://www.chaijs.com/guide/styles/#should
 */

'use strict';

const should = require('chai').should();

import '../src/js/parse-int.js';

describe('parse-int', function() {
    describe('it should exists', function() {
        should.exist(Object.prototype.parseInt);
    });

    describe('it should convert an integer to itself', function() {
        const input = 42;
        
        input.parseInt().should.equal(input);
    });

    describe('it should convert a float to its integer counterpart', function() {
        (42.7).parseInt().should.equal(42);
    });

    describe('it should convert a string to NaN', function() {
        isNaN('hello world'.parseInt()).should.equal(true);
    });
});
