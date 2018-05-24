/**
 * @see http://www.chaijs.com/guide/styles/#should
 */

'use strict';

const should = require('chai').should();

import '../src/js/is.js';

describe('is', function() {
    it('should exists', function() {
        should.exist(Object.prototype.is);
    });

    it('should return true if an array is compared to an array', function() {
        [1, 2, 3].is({ type: Array }).should.equal(true);
    });

    it('should return false if an array is compared to an object', function() {
        [1, 2, 3].is({ type: Object }).should.equal(false);
    });

    it('should return true if a boolean is compared to a boolean', function() {
        (true).is({ type: Boolean }).should.equal(true);
    })

    it('should return false if a boolean is compared to an object', function() {
        (true).is({ type: Object }).should.equal(false);
    });

    it('should return true if a date is compared to a date', function() {
        new Date('2018-01-01').is({ type: Date }).should.equal(true);
    });

    it('should return false if a date is compared to an object', function() {
        new Date('2018-01-01').is({ type: Object }).should.equal(false);
    });

    it('should return true if a number is compared to a number', function() {
        (42).is({ type: Number }).should.equal(true);
    });

    it('should return false if a number is compared to an object', function() {
        (42).is({ type: Object }).should.equal(false);
    });

    it('should return true if an object is compared to an object', function() {
        ({a: 1, b: 2}).is({ type: Object }).should.equal(true);
    });
});
