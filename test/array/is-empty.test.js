'use strict'

var should = require('chai').should();

import isEmpty from '../../src/js/array/is-empty.js';

describe('Array', function() {
	describe('isEmpty', function() {
		it('should return true if the array contains nothing', function() {
			[].isEmpty().should.equal(true);
		});

		it('should return false if the array contains something', function() {
			[1, 2, 3].isEmpty().should.equal(false);
		});

		it('should return false if the array contains something null', function() {
			[null].isEmpty().should.equal(false);
		});
	});
});
