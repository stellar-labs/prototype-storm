/**
 * @see http://www.chaijs.com/guide/styles/#should
 */

'use strict';

const should = require('chai').should();

import '../src/js/parse-date.js';

describe('parse-date', function() {
    describe('it should exists', function() {
        should.exist(Object.prototype.parseDate);
    });

    describe('it should parse the date from a string', function() {
        const date = '2018-01-01';

        date.parseDate().should.deep.equal(new Date(date));
    });

    describe('it should parse a date from a Date an return the same date', function() {
        const date = new Date('2018-01-01');

        date.parseDate().should.deep.equal(date);
    });

    describe('it should return Invalid Date if the string date is invalid', function() {
        const date = 'test';
        
        date.parseDate().should.deep.equal(new Date(date));
    });

    describe('it should return Invalid Date if the Date is invalid', function() {
        const date = new Date('test');

        date.parseDate().should.deep.equal(date);
    });
});
