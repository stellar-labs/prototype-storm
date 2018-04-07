'use strict';

var should = require('chai').should();

import ellipsis from '../../src/js/string/ellipsis.js';

describe('ellipsis String prototype', () => {
  it('should return the string ellipsized', () => {
    'Hello world!'.ellipsis({max: 5}).should.equal('Hello...');
  });

  it('should return the string not ellipsized', () => {
    'Hello world!'.ellipsis({max: 12}).should.equal('Hello world!');
  });

  it('should return the string ellipsized with a custom ellipsis delimitor', () => {
    'Hello world!'.ellipsis({max: 5, end: '[...]'}).should.equal('Hello[...]');
  });

  it('should return the ellipsis only', () => {
    'Hello world!'.ellipsis({max: -5}).should.equal('...');
  });
});
