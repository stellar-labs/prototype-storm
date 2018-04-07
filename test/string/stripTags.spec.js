'use strict';

import stripTags from '../src/js/stripTags.js';

describe('stripTags String prototype', () => {
  it('should return the string without html tags', () => {
    expect('<li><a href="/home.html">Home Page</a></li>'.stripTags()).toBe('Home Page');
  });
});