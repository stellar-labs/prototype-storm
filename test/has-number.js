/**
 * @see http://www.chaijs.com/guide/styles/#should
 */

'use strict';

const should = require('chai').should();

import '../src/js/has-number.js';

describe('has-number', function() {
    describe('it should exists', function() {
        should.exist(Object.prototype.hasNumber);
    });

    describe('it should return true if the string has a number', function() {
        '42'.hasNumber().should.equal(true);
    });

    describe('it should return true if the string contains numbers and letters', function() {
        '42 + 7 equals to 49'.hasNumber().should.equal(true);
    });

    describe('it should return false if the string is empty', function() {
        ''.hasNumber().should.equal(false);
    });
    
    describe('it should return false if the string is only composed of letters', function() {
        'hello world'.hasNumber().should.equal(false);
    });
});
