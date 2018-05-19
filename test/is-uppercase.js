/**
 * @see http://www.chaijs.com/guide/styles/#should
 */

'use strict';

const should = require('chai').should();

import '../src/js/is-uppercase.js';

describe('is-uppercase', function() {
    describe('it should exists', function() {
        should.exist(Object.prototype.isUppercase);
    });

    describe('it should return true if the string only has uppercases', function() {
        'HELLO'.isUppercase().should.equal(true);
    });

    describe('it should return true if the string have uppercases and others characters but lowercases', function() {
        'HELLO, 0'.isUppercase().should.equal(true);
    });

    describe('it should return fasle if the string do not have any uppercases', function() {
        'hello'.isUppercase().should.equal(false);
    });

    describe('it should return false if the string is empty', function() {
        ''.isUppercase().should.equal(false);
    });

    describe('it should return false if the string do not have any letters', function() {
        '123'.isUppercase().should.equal(false);
    });

    describe('it should return false if the string have uppercases and lowercases', function() {
        'Hello'.isUppercase().should.equal(false);
    });
});