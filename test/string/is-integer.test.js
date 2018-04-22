'use strict'

var should = require('chai').should();

import isInteger from '../../src/js/string/is-integer.js';

describe('String', function() {
	describe('isInteger', function() {
		it('should return true if the string is an integer', function() {
			'1'.isInteger().should.equal(true);
		});

		it('should return false if it is a decimal', function() {
			'1.1'.isInteger().should.equal(false);
		});

		it('should return false if it is a string', function() {
			'javascript'.isInteger().should.equal(false);
		});

		it('should return true if it is a string composed of numbers', function() {
			'3 4 1'.isInteger().should.equal(true);
		});

		it('should return true if the number have space around it', function() {
			' 1  '.isInteger().should.equal(true);
		})

		it('should return true if the number is negatively signed', function() {
			'-1'.isInteger().should.equal(true);
		});

		it('should return true if the number is positively signed', function() {
			'+1'.isInteger().should.equal(true);
		});

		it('should return false if the number is a negatively signed float', function() {
			'-1.1'.isInteger().should.equal(false);
		});

		it('should return false if the number is a positively signed float', function() {
			'+1.1'.isInteger().should.equal(false);
		});
	});
});
