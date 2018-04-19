'use strict'

var should = require('chai').should();

import { type } from '../../src/js/function/type.js';

console.log(type());

describe('Function', function() {
	describe('type', function() {
		it('should return the type null for null value', function() {
			var variable = null;

			should.equal(type(variable), variable);
		});

		it('should return the type undefined for undefined value', function() {
			var variable = undefined;

			should.equal(type(variable), variable);
		});		

		it('should return the type number for integer value', function() {
			type(1).should.equal('Number');
		});
	});
});
