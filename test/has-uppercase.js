/**
 * @see http://www.chaijs.com/guide/styles/#should
 */

'use strict';

const should = require('chai').should();

import '../src/js/has-uppercase.js';

describe('has-uppercase', function() {
    it('should exists', function() {
        should.exist(Object.prototype.hasUppercase);
    });

    it('should return true if the string contains an uppercase', function() {
        'Hello'.hasUppercase().should.equal(true);
    });

    it('should return true if the string only has uppercase', function() {
        'HELLO'.hasUppercase().should.equal(true);
    });

    it('should return false if the string is empty', function() {
        ''.hasUppercase().should.equal(false);
    });

    it('should return false if the string do not have any uppercases', function() {
        'hello'.hasUppercase().should.equal(false);
    });

    it('should return false if the string do not have any letters', function() {
        '42 - 7'.hasUppercase().should.equal(false);
    });
});
