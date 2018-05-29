/**
 * @see http://www.chaijs.com/guide/styles/#should
 */

'use strict';

const should = require('chai').should();

import '../src/js/to-query-strings.js';

describe('to-query-strings', function() {
    it('should exists', function() {
        should.exist(Object.prototype.toQueryStrings);
    });

    it('should return the string with query string', function() {
        ({ name: 'ferret', color: 'purple' }).toQueryStrings().should.equal('name=ferret&color=purple');
    });

    it('should return the string with query strings event if some properties are empty or undefined or null', function() {
        ({ name: 'ferret', 'color': '', size: null, diet: undefined }).toQueryStrings().should.equal('name=ferret&color=&size=&diet=');
    });

    it('should return string with encoded query strings', function() {
        ({ name: 'ståle', car: 'saab' }).toQueryStrings().should.equal('name=st%C3%A5le&car=saab');
    });

    it('should return an empty string if the object is empty', function() {
        ({}).toQueryStrings().should.equal('');
    });

    it('should return an empty string if the object do not contains strings', function() {
        ({ user: { name: 'John', age: 27 }, module: { 'name': 'home' } }).toQueryStrings().should.equal('');
    });
});
