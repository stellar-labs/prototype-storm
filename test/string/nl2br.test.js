'use strict';

var should = require('chai').should();

import nl2br from '../../src/js/string/nl2br.js';

describe('nl2br String prototype', () => {
  it('should return a string with break line from a string containing new lines', () => {
    'Hello\nWorld!'.nl2br().should.equal('Hello<br>World!');
  });

  it('should return a string with strict break line from a string containing new lines when the argument strict is set to true', () => {
    'Hello\nWorld!'.nl2br({strict: true}).should.equal('Hello<br/>World!');
  });

  it('should return a string with non-strict break line from a string containing new lines when the argument strict is set to false', () => {
    'Hello\nWorld!'.nl2br({strict: false}).should.equal('Hello<br>World!');
  });

  it('should return the same string when there is no line return', () => {
    'Hello World!'.nl2br().should.equal('Hello World!');
  });

  it('should return the same string when there is no line return and the strict argument is set to false', () => {
    'Hello World!'.nl2br({strict: false}).should.equal('Hello World!');
  });

  it('should return the same string when there is no line return and the strict argument is set to true', () => {
    'Hello World!'.nl2br({strict: true}).should.equal('Hello World!');
  });
});