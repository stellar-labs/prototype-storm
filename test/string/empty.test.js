var chai = require('chai').should();

import ellipsis from '../../src/js/empty.js';

describe('String', function() {
	describe('empty', function() {
		it('should return true on empty string', function() {
			''.empty().should.equal(true);
		});
	});
});