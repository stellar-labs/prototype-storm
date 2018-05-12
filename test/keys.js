/**
 * @see http://www.chaijs.com/guide/styles/#should
 */

'use strict';

const should = require('chai').should();

import '../src/js/keys.js';

describe('keys', function() {
    describe('it should exists', function() {
        should.exist(Object.prototype.keys);
    });

    describe('it should return the keys of the object', function() {
        ({a: 1, b: 2, c: 3}).keys().should.deep.equal(['a', 'b', 'c']);
    });

    describe('it should return the keys of the object as an array', function() {
        ({a: 1, b: 2, c: 3}).keys().should.be.a('array');
    });

    describe('it should return no keys if getting keys from an empty object', function() {
        ({}).keys().should.deep.equal([]);
    });

    describe('it should return no keys if getting keys from an empty object as an array', function() {
        ({}).keys().should.be.a('array');
    });
});
