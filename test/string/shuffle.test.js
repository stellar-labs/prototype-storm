'use strict';

import shuffle from '../../src/js/shuffle.js';

describe('shuffle String prototype', () => {
  it('should return a string different than what it was previously', () => {
    expect('Hello world!'.shuffle()).not.toBe('Hello world!');
  });
});