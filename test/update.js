/**
 * @see http://www.chaijs.com/guide/styles/#should
 */

'use strict';

const should = require('chai').should();

import '../src/js/update.js';

describe('update', function() {
    it('should exists', function() {
        should.exist(Object.prototype.update);
    });

    it('should update the object', function() {
        ({a: 1, b: 2, c: 3}).update({ a: 4 }).should.deep.equal({ a: 4, b: 2, c: 3 });
    });

    it('should return the same object when updating with an empty object', function() {
        const object = {a: 1, b: 2, c: 3};
        
        object.update().should.deep.equal(object);
    });
    
    it('should update an empty object', function() {
        const values = { a: 1 };
        
        ({}).update(values).should.deep.equal(values);
    });

    it('should return the empty object when updating with an empty object', function() {
        ({}).update().should.deep.equal({});
    });

    it('should update the array', function() {
        [1, 2, 3].update({ 0: 4 }).should.deep.equal([4, 2, 3]);
    });

    it('should return the same array when updating with an empty object', function() {
        const array = [1, 2, 3];

        array.update().should.deep.equal(array);
    });

    it('should update an empty array', function() {
        [].update({ 0: 'a' }).should.deep.equal(['a']);
    });

    it('should return the empty array when updating with an empty object', function() {
        [].update().should.deep.equal([]);
    });

    it('should update the string', function() {
        'hello'.update({ 0: 'y' }).should.equal('yello');
    });

    it('should return the empty string when updating with an empty object', function() {
        const string = '';
        
        string.update().should.equal(string);
    });
});
