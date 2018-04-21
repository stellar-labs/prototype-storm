'use strict'

var should = require('chai').should();

import whereEqual from '../../src/js/array/where-equal.js';

describe('Array', function() {
	describe('whereEqual', function() {
		it('should throw an error if the value option is not set', function() {
			should.Throw(function() {
				[].whereEqual();
			});
		});

		it('should return an array', function() {
			[].whereEqual({ value: 1 }).should.be.a('Array');
		});

		it('should filter correctly', function() {
			[1, 2, '2', 3, 4].whereEqual({ value: 2 }).should.deep.equal([2, '2']);
		});

		it('should filter correctly with strict mode enabled', function() {
			[1, 2, '2', 3, 4].whereEqual({ value: 2, strict: true }).should.deep.equal([2]);
		});

		it('should filter correctly on empty array', function() {
			[].whereEqual({ value: 2 }).should.deep.equal([]);
		})
	});
});
