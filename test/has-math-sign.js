/**
 * @see http://www.chaijs.com/guide/styles/#should
 */

'use strict';

const should = require('chai').should();

import '../src/js/has-math-sign.js';

describe('has-math-sign', function() {
    it('should exists', function() {
        should.exist(Object.prototype.hasMathSign);
    });

    it('should return true if the string contains mathematical signs', function() {
        '1 + 2'.hasMathSign().should.equal(true);
    });

    it('should return true if the string has ligatured mathematical sign', function() {
        '≥'.hasMathSign().should.equal(true);
    });

    it('should return false if the string is empty', function() {
        ''.hasMathSign().should.equal(false);
    }); 

    it('should return false if the string is only composed of numbers', function() {
        '123'.hasMathSign().should.equal(false);
    });

    it('should return false if the string has only non letters, non mathematical characters', function() {
        ',.$'.hasMathSign().should.equal(false);
    });

    it('should return false if the string only has letters', function() {
        'hello world'.hasMathSign().should.equal(false);
    });
});
