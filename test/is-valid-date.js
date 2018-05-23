/**
 * @see http://www.chaijs.com/guide/styles/#should
 */

'use strict';

const should = require('chai').should();

import '../src/js/is-valid-date.js';

describe('is-valid-date', function() {
    describe('it should exists', function() {
        should.exist(Object.prototype.isValidDate);
    });

    describe('it should return true is the date is valid', function() {
        new Date('2018-01-01').isValidDate().should.equal(true);
    });

    describe('it should return false is the date is valid and is a string', function() {
        '2018-01-01'.isValidDate().should.equal(true);
    });

    describe('it should return false is the date is invalid', function() {
        new Date('test').isValidDate().should.equal(false);
    });

    describe('it should return false is the date is invalid and is a string', function() {
        'test'.isValidDate().should.equal(false);
    });
});
