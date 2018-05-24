/**
 * @see http://www.chaijs.com/guide/styles/#should
 */

'use strict';

const should = require('chai').should();

import '../src/js/has-lowercase.js';

describe('has-lowercase', function() {
    it('should exists', function() {
        should.exist(Object.prototype.hasLowercase);
    });

    it('should return true if the string has a lowercase', function() {
        'hello'.hasLowercase().should.equal(true);
    });

    it('should return true if the string has at least one uppercase', function() {
        'Hello'.hasLowercase().should.equal(true);
    });

    it('should return false if the string is empty', function() {
        ''.hasLowercase().should.equal(false);
    });

    it('should return false if the string is only composed of uppercases', function() {
        'HELLO'.hasLowercase().should.equal(false);
    });
    
    it('should return false if the string do not have any letters', function() {
        '42 - 7'.hasLowercase().should.equal(false);
    });
});
