/**
 * @see http://www.chaijs.com/guide/styles/#should
 */

'use strict';

const should = require('chai').should();

import '../src/js/query-strings.js';

describe('query-strings', function() {
    it('should exists', function() {
        should.exist(Object.prototype.queryStrings);
    });

    it('should return the query string for an url with query string', function() {
        'http://example.com/path/to/page?name=ferret&color=purple'.queryStrings().should.deep.equal({name: 'ferret', color: 'purple'});
    });

    it('should return the query strings if the url contains some query strings mixed with hash', function() {
        'http://example.com/path/to/page?name=ferret&color=purple#cats&dogs'.queryStrings().should.deep.equal({name: 'ferret', color: 'purple'});
    });

    it('should return an empty object if the url contains only hash', function() {
        'http://example.com/path/to/page#cats'.queryStrings().should.deep.equal({});
    });

    it('should return an empty object if the url has no query strings', function() {
        'http://example.com/path/to/page'.queryStrings().should.deep.equal({});
    });

    it('should return an empty array if the string is empty', function() {
        ''.queryStrings().should.deep.equal({});
    });

    it('should return an empty object if the string is not an URL', function() {
        "hell world, how are you today ? Me I'm fine!".queryStrings().should.deep.equal({});
    });
});
