/**
 * @see http://www.chaijs.com/guide/styles/#should
 */

'use strict';

const should = require('chai').should();

import '../src/js/max.js';

describe('max', function() {
    describe('it should exists', function() {
        should.exist(Object.prototype.max);
    });

    describe('it should give the maximum of an array', function() {
        [1, 2, 3, 1, 2].max().should.equal(3);
    });

    describe('it should give the maximum of an array containing null values', function() {
        [1, 2, null, 4, 5].max().should.equal(5);
    });

    describe('it should give the maximum of an array containing strings', function() {
        [1, '2', 3, 4, '5'].max().should.equal(5);
    });

    describe('it should give the maximum of an array containing null and string values', function() {
        [1, null, '3', 4, '5', null].max().should.equal(5);
    });

    /**
     * @todo test when array contains object
     */

    describe('it should give the maximum of an object', function() {
        ({a: 1, b: 2, c: 3, d: 1, e: 2}).max().should.equal(3);
    });

    describe('it should give the maximum of an object even if it has nested object', function() {
        ({ a: 1, b: { c: 2, d: 3 } }).max().should.equal(3);
    });

    describe('it should give the maximum of an object even if it has nested object and null values mixed', function() {
        ({ a: 1, b: { c: 2, d: null, e: 3 } }).max().should.equal(3);
    });

    describe('it should give the maxiumum of an object event if it has null values', function() {
        ({a: null, b: 1, c: 2}).max().should.equal(2);
    });

    describe('it should give the max of an object even if it has string values', function() {
        ({a: 'test', b: '2', c: 1}).max().should.equal(2);
    });
});
