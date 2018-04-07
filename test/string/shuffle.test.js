'use strict';

var should = require('chai').should();

import shuffle from '../../src/js/string/shuffle.js';

describe('shuffle String prototype', () => {
  it('should return a string different than what it was previously', () => {
    'Hello world!'.shuffle().should.not.equal('Hello world!');
  });
});