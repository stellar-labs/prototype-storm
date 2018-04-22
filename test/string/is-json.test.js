'use strict'

var should = require('chai').should();

import isJson from '../../src/js/string/is-json.js';

describe('String', function() {
	describe('isJson', function() {
		it('should return true if it is an correct JSON', function() {
			'{"name": "John", "age": "21"}'.isJson().should.equal(true);
		});

		it('should return false if it is an incorrect JSON', function() {
			'name: John, age: 21'.isJson().should.equal(false);
		});
	});
});
