'use strict';

import empty from '../../src/js/string/empty.js';

describe('empty String prototype', () => {
  it('should return true when string is empty', () => {
    expect(''.empty()).toBe(true);
  });

  it('should return false when the string is not empty', () => {
    expect('Hello world!'.empty()).toBe(false);
  });
});
