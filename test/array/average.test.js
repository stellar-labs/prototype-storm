'use strict'

var should = require('chai').should();

import average from '../../src/js/array/average.js';

describe('Array', function() {
	describe('average', function() {
		it('should return the correct average for integers', function() {
			[1, 2, 3, 4].average().should.equal(2.5);
		});

		it('should return the correct average for float', function() {
			[1.5, 2.5, 3.5, 4.5].average().should.equal(3);
		});

		it('should return Infinity if one the the item is infinite', function() {
			[1, 2, Infinity, 4].average().should.equal(Infinity);
		});

		it('should return the correct average even if there is no numbers', function() {
			['test', {name: 'John'}, null, undefined].average().should.equal(0);
		});

		it('should return the correct average with mixed numbers and non numbers', function() {
			['test', 2, null, 4].average().should.equal(3);
		});

		it('should retun Infinity is all the numbers are infinite', function() {
			[Infinity, Infinity].average().should.equal(Infinity);
		});

		it('should return 0 if the array is empty', function() {
			[].average().should.equal(0);
		});
	});
});
