'use strict';

import nl2br from '../../src/js/string/nl2br.js';

describe('nl2br String prototype', () => {
  it('should return a string with break line from a string containing new lines', () => {
    expect('Hello\nWorld!'.nl2br()).toBe('Hello<br>World!');
  });

  it('should return a string with strict break line from a string containing new lines when the argument strict is set to true', () => {
    expect('Hello\nWorld!'.nl2br({strict: true})).toBe('Hello<br/>World!');
  });

  it('should return a string with non-strict break line from a string containing new lines when the argument strict is set to false', () => {
    expect('Hello\nWorld!'.nl2br({strict: false})).toBe('Hello<br>World!');
  });

  it('should return the same string when there is no line return', () => {
    expect('Hello World!'.nl2br()).toBe('Hello World!');
  });

  it('should return the same string when there is no line return and the strict argument is set to false', () => {
    expect('Hello World!'.nl2br({strict: false})).toBe('Hello World!');
  });

  it('should return the same string when there is no line return and the strict argument is set to true', () => {
    expect('Hello World!'.nl2br({strict: true})).toBe('Hello World!');
  });
});