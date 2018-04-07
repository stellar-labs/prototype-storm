'use strict';

require('chai').should();

import empty from '../../src/js/string/empty.js';

describe('empty String prototype', () => {
  it('should return true when string is empty', () => {
    ''.empty().should.equal(true);
  });

  it('should return false when the string is not empty', () => {
    'Hello world!'.empty().should.equal(false);
  });
});
