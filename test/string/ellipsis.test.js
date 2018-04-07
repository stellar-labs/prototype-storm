'use strict';

import ellipsis from '../../src/js/string/ellipsis.js';

describe('ellipsis String prototype', () => {
  it('should return the string ellipsized', () => {
    expect('Hello world!'.ellipsis({max: 5})).toBe('Hello...')
  });

  it('should return the string not ellipsized', () => {
    expect('Hello world!'.ellipsis({max: 12})).toBe('Hello world!')
  });

  it('should return the string ellipsized with a custom ellipsis delimitor', () => {
    expect('Hello world!'.ellipsis({max: 5, end: '[...]'})).toBe('Hello[...]')
  });

  it('should return the ellipsis only', () => {
    expect('Hello world!'.ellipsis({max: -5})).toBe('...')
  });
});
