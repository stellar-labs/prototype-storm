/**
 * @see http://www.chaijs.com/guide/styles/#should
 */

'use strict';

const should = require('chai').should();

import '../src/js/is-lowercase.js';

describe('is-lowercase', function() {
    it('should exists', function() {
        should.exist(Object.prototype.isLowercase);
    });

    it('should return true if the string is only composed of lowercases', function() {
        'hello'.isLowercase().should.equal(true);
    });

    it('should return true if the string is composed of lowercases and non uppercases', function() {
        'hello, how are you today?'.isLowercase().should.equal(true);
    });

    it('should return false is the string is empty', function() {
        ''.isLowercase().should.equal(false);
    });

    it('should return false if the string is only composed of uppercases', function() {
        'HELLO'.isLowercase().should.equal(false);
    });

    it('should return false if the string is not composed of letters', function() {
        '123'.isLowercase().should.equal(false);
    });
});
