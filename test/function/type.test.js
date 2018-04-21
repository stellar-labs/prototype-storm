'use strict'

var should = require('chai').should();

import type from '../../src/js/function/type.js';

describe('Function', function() {
	describe('type', function() {
		it('should return the type null for null value', function() {
			should.equal(type(null), 'null');
		});

		it('should return the type undefined for undefined value', function() {
			should.equal(type(undefined), 'undefined');
		});		

		it('should return the type number for integer value', function() {
			type(1).should.equal('Number');
		});

		it('should return the type object for an object value', function() {
			type({}).should.equal('Object');
		});

		it('should return the type Date for a date', function() {
			type(new Date('1970-01-01')).should.equal('Date');
		});

		it('should return the type Boolean for a boolean', function() {
			type(true).should.equal('Boolean');
		});

		it('should return the type String for a string', function() {
			type('').should.equal('String');
		});

		it('should return the type RegExp for a regexp', function() {
			type(/[\w]/g).should.equal('RegExp');
		});

		it('should return the type RegExp for a regexp built with the class', function() {
			type(new RegExp('[\w]', 'g')).should.equal('RegExp');
		});

		it('should return the type Symbol for a symbol', function() {
			type(Symbol('foo')).should.equal('Symbol');
		});
	});
});
