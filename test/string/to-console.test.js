'use strict'

var should = require('chai').should();

import toConsole from '../../src/js/string/to-console.js';

describe('String', function() {
	describe('toConsole', function() {
		it('should return the string', function() {
			var text = 'hello world';

			text.toConsole().should.equal(text);
		});
	});
});
