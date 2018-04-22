'use strict'

var should = require('chai').should();

import toJson from '../../src/js/array/to-json.js';

describe('Array', function() {
	describe('toJson', function() {
		it('should works for empty array', function() {
			[].toJson().should.equal('[]');
		});

		it('should work for integer array', function() {
			[1, 2, 3].toJson().should.equal('[1,2,3]');
		});

		it('should work for object array', function() {
			var array = [
				{
					name: 'John'
				},
				{
					name: 'Foo'
				}
			];

			array.toJson().should.equal('[{"name":"John"},{"name":"Foo"}]');
		});

		it('should return a string', function() {
			[].toJson().should.be.a('String');
		});
	});
});
