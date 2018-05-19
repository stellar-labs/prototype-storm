/**
 * @see http://www.chaijs.com/guide/styles/#should
 */

'use strict';

const should = require('chai').should();

import '../src/js/type.js';

describe('type', function() {
    describe('it should exists', function() {
        should.exist(Object.prototype.type);
    });

    describe('it should return Array if the element is an array', function() {
        [].type().should.equal(Array);
    });

    describe('it should return array if the element is an array', function() {
        [].type({ toString: true }).should.equal('array');
    });

    describe('it should return Boolean if the element is a boolean', function() {
        (true).type().should.equal(Boolean);
    });

    describe('it should return boolean if the element is a boolean', function() {
        (true).type({ toString: true }).should.equal('boolean');
    });

    describe('it should return Date if the element is a date', function() {
        new Date('2018-01-01').type().should.equal(Date);
    });

    describe('it should return date if the element is a date', function() {
        new Date('2018-01-01').type({ toString: true }).should.equal('date');
    });

    describe('it should return Number if the element is a number', function() {
        (42).type().should.equal(Number);
    });

    describe('it should return number if the element is a number', function() {
        (42).type({ toString: true }).should.equal('number');
    });

    describe('it should return Object if the string is an object', function() {
        ({a: 1, b: 2}).type().should.equal(Object);
    });

    describe('it should return object if the element is an object', function() {
        ({a: 1, b: 2}).type({ toString: true }).should.equal('object');
    });

    describe('it should return RegExp is the element is a regular expression', function() {
        /[a-z]/.type().should.equal(RegExp);
    });

    describe('it should return RegExp if the element is a RegExp class', function() {
        new RegExp('[a-z]').type().should.equal(RegExp);
    });

    describe('it should return regexp if the element is a regular expression', function() {
        /[a-z]/.type({ toString: true }).should.equal('regexp');
    });

    describe('it should return regexp if the element is a RegExp object', function() {
        new RegExp('[a-z]').type({ toString: true }).should.equal('regexp');
    });
});
