'use strict'

var should = require('chai').should();

import sum from '../../src/js/array/sum.js';

describe('Array', function() {
	describe('sum', function() {
		it('should return the correct sum', function() {
			[1, 2, 3, 4].sum().should.equal(10);
		});

		it('should return infinity if one of the item is infinite', function() {
			[1, 2, Infinity, 4].sum().should.equal(Infinity);
		});

		it('should return the sum whether it contains non number', function() {
			['1', 2, 'three', 3, 4, {}].sum().should.equal(10); 
		});

		it('should return the sum whether the array contains null values', function() {
			[1, 2, 3, null, 4].sum().should.equal(10);
		});
	});
});
