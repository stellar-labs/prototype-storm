const should = require('chai').should();

import '../src/js/format.js';

describe('format', function() {
    it('should exists', function() {
        should.exist(Object.prototype.format);
    });

    it('should return the same string', function() {
        let text = 'hello world';

        text.format().should.equal(text);
    });

    it('should return a String', function() {
        'hello world'.format().should.be.a('string');
    });

    it('should return the formatted string', function() {
        "hello {name}".format({ name: 'John' }).should.equal('hello John');
    });

    it('should return the formatted string as a string', function() {
        "hello {name}".format({ name: 'John' }).should.be.a('string');
    });

    it('should return the formtted string using multiple placeholders', function() {
        "hello {name}, how are you this {day}?".format({ name: 'John', day: 'monday' }).should.equal('hello John, how are you this monday?');
    });

    it('should return the formtted string using multiple placeholders and return a string', function() {
        "hello {name}, how are you this {day}?".format({ name: 'John', day: 'monday' }).should.be.a('string');
    });

    it('should not format unknown placeholders', function() {
        "hello {name}, how are you this {day}?".format({ name: 'John' }).should.equal('hello John, how are you this {day}?');
    });

    it('should not format unknown placeholders and return a string', function() {
        "hello {name}, how are you this {day}?".format({ name: 'John' }).should.be.a('string');
    });

    it('should not format placeholders containing spaces', function() {
        "hello {name }".format({ name: 'John' }).should.equal('hello {name }');
    });

    it('should not format placeholders containing spaces and return a string', function() {
        "hello {name }".format({ name: 'John' }).should.be.a('string');
    });
});
