/**
 * @see http://www.chaijs.com/guide/styles/#should
 */

'use strict';

const should = require('chai').should();

import '../src/js/pass.js';

describe('pass', function() {
    describe('it should exists', function() {
        should.exist(Object.prototype.pass);
    });

    describe('it should return true if matching a Number against an empty regexp', function() {
        Number(34).pass().should.equal(true);
    });

    describe('it should return true if matching a Number against an empty regexp and return a Boolean', function() {
        Number(34).pass().should.be.a('boolean');
    });

    describe('it should return true if matching a Date against an empty regexp', function() {
        new Date().pass().should.equal(true);
    });

    describe('it should return true if matching a Date against an empty regexp and return a boolean', function() {
        new Date().pass().should.be.a('boolean');
    });

    describe('it should return true if matching a RegExp against an empty regexp', function() {
        /^[a-z]/.pass().should.equal(true);
    });

    describe('it should return true if matching a RegExp against an empty regexp and return a boolean', function() {
        /^[a-z]/.pass().should.be.a('boolean');
    });

    describe('it shoud return true if matching a String against an empty regexp', function() {
        'hello'.pass().should.equal(true);
    });

    describe('it shoud return true if matching a String against an empty regexp and return a boolean', function() {
        'hello'.pass().should.be.a('boolean');
    });

    describe('it should work on Infinity', function() {
        should.not.Throw(function() {
            Infinity.pass();
        });
    });

    describe('it should work on Infinity and return a boolean', function() {
        Infinity.pass().should.be.a('boolean');
    });
});
