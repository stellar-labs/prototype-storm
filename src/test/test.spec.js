'use strict';
import {expect} from 'chai';
import '../js/flatten.js';
import '../js/map.js';
import '../js/average.js';
import '../js/empty.js';
import '../js/sum.js';
import '../js/json.js';
import '../js/shuffle.js';
import '../js/nl2br.js';
describe('Prototype Storm', () => {
  describe('Average', () => {
    it('Should return the average of an array', () => {
      expect([1, 2, 3].average()).to.equal(2);
    });
    it('Should return zero with an empty array', () => {
      expect([].average()).to.equal(0);
    });
    it('Should return zero with an array of letters\' string', () => {
      expect(['esmodule', 'commonjs', 'AMD'].average()).to.equal(0);
    });
    it('Should return zero with an object', () => {
      expect({a: 1, b: 2, c: 3}.average()).to.equal(0);
    });
    it('Should return zero with a string', () => {
      expect({a: 1, b: 2, c: 3}.average()).to.equal(0);
    });
    it('Should return the number with a number', () => {
      expect((5).average()).to.equal(5);
    });
  });
  describe('Empty', () => {
    it('Should return true on empty object', () => {
      expect({}.empty()).to.deep.equal(true);
    });
    it('Should return false on non-empty object', () => {
      expect({a: 1}.empty()).to.deep.equal(false);
    });
    it('Should return true on empty array', () => {
      expect([].empty()).to.deep.equal(true);
    });
    it('Should return false on non-empty array', () => {
      expect([1].empty()).to.deep.equal(false);
    });
    it('Should return true on empty string', () => {
      expect(''.empty()).to.deep.equal(true);
    });
    it('Should return false on non-empty string', () => {
      expect('Testing Baby'.empty()).to.deep.equal(false);
    });
    it('Should return true on zero number', () => {
      expect((0).empty()).to.deep.equal(true);
    });
    it('Should return false on non-zero number', () => {
      expect((123).empty()).to.deep.equal(false);
    });
  });
  describe('Flatten', () => {
    it('Should return a flattened array', () => {
      expect([1, [2, [3]]].flatten()).to.deep.equal([1, 2, 3]);
    });
    it('Should return the same array', () => {
      expect([1, 2, 3].flatten()).to.deep.equal([1, 2, 3]);
    });
    it('Should return an empty array', () => {
      expect([].flatten()).to.deep.equal([]);
    });
    it('Should return a flattened object', () => {
      expect({a: 1, b: {c: 2, d: {e: 3}}}.flatten()).to.deep.equal({a: 1, c: 2, e: 3});
    });
    it('Should return the same object', () => {
      expect({a: 1, b: 2, c: 3}.flatten()).to.deep.equal({a: 1, b: 2, c: 3});
    });
    it('Should return an empty object', () => {
      expect({}.flatten()).to.deep.equal({});
    });
  });
  describe('Json', () => {
    it('Should return the stringified version of an array of strings', () => {
      expect(['first', 'second', 'third'].json()).to.deep.equal('["first","second","third"]');
    });
    it('Should return the stringified version of an array of strings', () => {
      expect([1, 2, 3].json()).to.deep.equal('[1,2,3]');
    });
    it('Should return the stringified version of an array of objects', () => {
      expect([{a: 1}, {b: 2}, {c: 3}].json()).to.deep.equal('[{"a":1},{"b":2},{"c":3}]');
    });
    it('Should return the stringified version of an array of objects', () => {
      expect([{a: 'first'}, {b: 'second'}, {c: 'third'}].json()).to.deep.equal('[{"a":"first"},{"b":"second"},{"c":"third"}]');
    });
    it('Should return the stringified version of an object of string', () => {
      expect({a: 'first', b: 'second', c: 'third'}.json()).to.deep.equal('{"a":"first","b":"second","c":"third"}');
    });
    it('Should return the stringified version of an object of numbers', () => {
      expect({a: 1, b: 2, c: 3}.json()).to.deep.equal('{"a":1,"b":2,"c":3}');
    });
    it('Should return the stringified version of string', () => {
      expect('JavaScript').to.deep.equal('JavaScript');
    });
    it('Should return the stringified version of number', () => {
      expect((123).json()).to.deep.equal('123');
    });
  });
  describe('Map', () => {
    it('Should return the values of the object', () => {
      expect({a: 1, b: 2, c: 3}.map(value => value)).to.deep.equal([1, 2, 3]);
    });
    it('Should return the indexes of the object', () => {
      expect({a: 1, b: 2, c: 3}.map((value, index) => index)).to.deep.equal(['a', 'b', 'c']);
    });
  });
  describe('New line to HTML line break', () => {
    it('Should return the string with HTML line break', () => {
      expect('javascript\nphp\nruby'.nl2br()).to.deep.equal('javascript<br>php<br>ruby');
    });
    it('Should return the string with HTML line break when the strict mode is disabled', () => {
      expect('javascript\nphp\nruby'.nl2br({strict: false})).to.deep.equal('javascript<br>php<br>ruby');
    });
    it('Should return the string with strict HTML line break when the strict mode is enabled', () => {
      expect('javascript\nphp\nruby'.nl2br({strict: true})).to.deep.equal('javascript<br/>php<br/>ruby');
    });
    it('Should return the string without HTML line break', () => {
      expect('javascript'.nl2br()).to.deep.equal('javascript');
    });
    it('Should return the string without HTML line break when the strict mode is disabled', () => {
      expect('javascript'.nl2br({strict: false})).to.deep.equal('javascript');
    });
    it('Should return the string without strict HTML line break when the strict mode is enabled', () => {
      expect('javascript'.nl2br({strict: true})).to.deep.equal('javascript');
    });
    it('Should return the array with HTML line break', () => {
      expect(['javascript', '\n', 'php', '\n', 'ruby'].nl2br()).to.deep.equal(['javascript', '<br>', 'php', '<br>', 'ruby']);
    });
    it('Should return the array with HTML line break when the strict mode is disabled', () => {
      expect(['javascript', '\n', 'php', '\n', 'ruby'].nl2br({strict: false})).to.deep.equal(['javascript', '<br>', 'php', '<br>', 'ruby']);
    });
    it('Should return the array with strict HTML line break when the strict mode is enabled', () => {
      expect(['javascript', '\n', 'php', '\n', 'ruby'].nl2br({strict: true})).to.deep.equal(['javascript', '<br/>', 'php', '<br/>', 'ruby']);
    });
    it('Should return the array without HTML line break', () => {
      expect(['javascript'].nl2br()).to.deep.equal(['javascript']);
    });
    it('Should return the array without HTML line break when the strict mode is disabled', () => {
      expect(['javascript'].nl2br({strict: false})).to.deep.equal(['javascript']);
    });
    it('Should return the array without strict HTML line break when the strict mode is enabled', () => {
      expect(['javascript'].nl2br({strict: true})).to.deep.equal(['javascript']);
    });
  });
  describe('Shuffle', () => {
    it('Should return the array randomized', () => {
      expect([1, 2, 3, 4, 5, 6, 7, 8, 9, 0].shuffle()).to.not.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
    });
    it('Should return the string randomized', () => {
      expect('aminnairi'.shuffle()).to.not.deep.equal('aminnairi');
    });
    it('Should return the number randomized', () => {
      expect((1234567890).shuffle()).to.not.deep.equal(1234567890);
    });
  });
  describe('Sum', () => {
    it('Should return the sum of the array\'s members when used on an array', () => {
      expect([1, 2, 3].sum()).to.deep.equal(6);
    });
    it('Should return zero when used on an empty array', () => {
      expect([].sum()).to.deep.equal(0);
    });
    it('Should return zero when used on object', () => {
      expect({}.sum()).to.deep.equal(0);
    });
    it('Should return zero when used on string', () => {
      expect(''.sum()).to.deep.equal(0);
    });
    it('Should return the exacte same number when used on number', () => {
      expect(''.sum()).to.deep.equal(0);
    });
  });
});
