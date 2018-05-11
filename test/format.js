/**
 * @see http://www.chaijs.com/guide/styles/#should
 */

'use strict';

const should = require('chai').should();

import '../src/js/format.js';

describe('format', function() {
    describe('it should exists', function() {
        should.exist(Object.prototype.format);
    });

    describe('it should return the same string', function() {
        let text = 'hello world';

        text.format().should.equal(text);
    });

    describe('it should return a String', function() {
        'hello world'.format().should.be.a('string');
    });

    describe('it should return the formatted string', function() {
        "hello {name}".format({ name: 'John' }).should.equal('hello John');
    });

    describe('it should return the formatted string as a string', function() {
        "hello {name}".format({ name: 'John' }).should.be.a('string');
    });

    describe('it should return the formtted string using multiple placeholders', function() {
        "hello {name}, how are you this {day}?".format({ name: 'John', day: 'monday' }).should.equal('hello John, how are you this monday?');
    });

    describe('it should return the formtted string using multiple placeholders and return a string', function() {
        "hello {name}, how are you this {day}?".format({ name: 'John', day: 'monday' }).should.be.a('string');
    });

    describe('it should not format unknown placeholders', function() {
        "hello {name}, how are you this {day}?".format({ name: 'John' }).should.equal('hello John, how are you this {day}?');
    });

    describe('it should not format unknown placeholders and return a string', function() {
        "hello {name}, how are you this {day}?".format({ name: 'John' }).should.be.a('string');
    });

    describe('it should not format placeholders containing spaces', function() {
        "hello {name }".format({ name: 'John' }).should.equal('hello {name }');
    });

    describe('it should not format placeholders containing spaces and return a string', function() {
        "hello {name }".format({ name: 'John' }).should.be.a('string');
    });
});
