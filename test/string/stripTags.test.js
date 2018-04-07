'use strict';

var should = require('chai').should();

import stripTags from '../../src/js/string/stripTags.js';

describe('stripTags String prototype', () => {
  it('should return the string without html tags', () => {
    '<li><a href="/home.html">Home Page</a></li>'.stripTags().should.equal('Home Page');
  });
});