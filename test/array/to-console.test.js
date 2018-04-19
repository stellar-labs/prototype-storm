'use strict'

var should = require('chai').should();

import toConsole from '../../src/js/array/to-console.js';

describe('Array', function() {
	describe('toConsole', function() {
		it('should return the array', function() {
			var array = [1, 2, 3, 4];

			array.toConsole().should.equal(array);
		});
	});
});
