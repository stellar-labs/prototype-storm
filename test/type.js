/**
 * @see http://www.chaijs.com/guide/styles/#should
 */

'use strict';

const should = require('chai').should();

import '../src/js/type.js';

describe('type', function() {
    it('should exists', function() {
        should.exist(Object.prototype.type);
    });

    it('should return Array if the element is an array', function() {
        [].type().should.equal(Array);
    });

    it('should return array if the element is an array', function() {
        [].type({ toString: true }).should.equal('array');
    });

    it('should return Boolean if the element is a boolean', function() {
        (true).type().should.equal(Boolean);
    });

    it('should return boolean if the element is a boolean', function() {
        (true).type({ toString: true }).should.equal('boolean');
    });

    it('should return Date if the element is a date', function() {
        new Date('2018-01-01').type().should.equal(Date);
    });

    it('should return date if the element is a date', function() {
        new Date('2018-01-01').type({ toString: true }).should.equal('date');
    });

    it('should return Number if the element is a number', function() {
        (42).type().should.equal(Number);
    });

    it('should return number if the element is a number', function() {
        (42).type({ toString: true }).should.equal('number');
    });

    it('should return Object if the string is an object', function() {
        ({a: 1, b: 2}).type().should.equal(Object);
    });

    it('should return object if the element is an object', function() {
        ({a: 1, b: 2}).type({ toString: true }).should.equal('object');
    });

    it('should return RegExp is the element is a regular expression', function() {
        /[a-z]/.type().should.equal(RegExp);
    });

    it('should return RegExp if the element is a RegExp class', function() {
        new RegExp('[a-z]').type().should.equal(RegExp);
    });

    it('should return regexp if the element is a regular expression', function() {
        /[a-z]/.type({ toString: true }).should.equal('regexp');
    });

    it('should return regexp if the element is a RegExp object', function() {
        new RegExp('[a-z]').type({ toString: true }).should.equal('regexp');
    });
});
