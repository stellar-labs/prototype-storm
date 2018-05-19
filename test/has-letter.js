/**
 * @see http://www.chaijs.com/guide/styles/#should
 */

'use strict';

const should = require('chai').should();

import '../src/js/has-letter.js';

describe('has-letter', function() {
    describe('it should exists', function() {
        should.exist(Object.prototype.hasLetter);
    });

    describe('it should return true if the string only has lowercases', function() {
        'hello'.hasLetter().should.equal(true);
    });

    describe('it should return true if the string only has uppercases', function() {
        'HELLO'.hasLetter().should.equal(true);
    });

    describe('it should return true if the string has spaces and lowercases', function() {
        'hello world'.hasLetter().should.equal(true);
    });

    describe('it should return true if the string has uppercases and spaces', function() {
        'HELLO WORLD'.hasLetter().should.equal(true);
    });

    describe('it should return true if the string has different kind of characters, including letters', function() {
        'hello world, what is the answer of 42?'.hasLetter().should.equal(true);
    });

    describe('it should return false if the string is empty', function() {
        ''.hasLetter().should.equal(false);
    });

    describe('it should return false if the string do not have any letters', function() {
        '42 - 7 = ??'.hasLetter().should.equal(false);
    });
});
