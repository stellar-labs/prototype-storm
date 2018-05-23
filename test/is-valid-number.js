/**
 * @see http://www.chaijs.com/guide/styles/#should
 */

'use strict';

const should = require('chai').should();

import '../src/js/is-valid-number.js';

describe('is-valid-number', function() {
    describe('it should exists', function() {
        should.exist(Object.prototype.isValidNumber);
    });

    describe('it should return false if the number is not correct', function() {
        Number('test').isValidNumber().should.equal(false);
    });

    describe('it should return true if the number is correct', function() {
        Number(42).isValidNumber().should.equal(true);
    });

    describe('it should return true for a number in a string', function() {
        "42".isValidNumber().should.equal(true);
    });
});
