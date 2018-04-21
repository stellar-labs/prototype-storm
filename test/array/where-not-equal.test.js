'use strict'

var should = require('chai').should();

import whereNotEqual from '../../src/js/array/where-not-equal.js';

describe('Array', function() {
	describe('whereNotEqual', function() {
		it('should throw an error if the value option is not set', function() {
			should.Throw(function() {
				[].whereNotEqual();	
			});			
		});

		it('should filter the correct items', function() {
			[1, 2, '2'].whereNotEqual({ value: 2 }).should.deep.equal([1]);
		});

		it('should filter the correct items in strict mode', function() {
			[1, 2, '2'].whereNotEqual({ value: 2, strict: true }).should.deep.equal([1, '2']);
		});

		it('should filter on an empty input', function() {
			[].whereNotEqual({ value: 2 }).should.deep.equal([]);
		});
	});
});
