'use strict';
import {expect} from 'chai';
import '../js/flatten.js';
import '../js/map.js';
import '../js/average.js';
import '../js/empty.js';
describe('Prototype Storm', () => {
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
  });
  describe('Map', () => {
    it('Should return the values of the object', () => {
      expect({a: 1, b: 2, c: 3}.map(value => value)).to.deep.equal([1, 2, 3]);
    });
    it('Should return the indexes of the object', () => {
      expect({a: 1, b: 2, c: 3}.map((value, index) => index)).to.deep.equal(['a', 'b', 'c']);
    });
  });
  describe('Average', () => {
    it('Should return the average of an array', () => {
      expect([1, 2, 3].average()).to.equal(6);
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
});
