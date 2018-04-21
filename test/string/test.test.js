'use strict'

var should = require('chai').should();

import test from '../../src/js/string/test.js';

describe('String', function() {
	describe('test', function() {
		it('should throw an error if the regexp option is not set', function() {
			should.Throw(function() {
				''.test();
			});
		});

		it('should throw an error if the regexp option is not a regexp', function() {
			should.Throw(function() {
				''.test({regexp: 1});
			});
		});

		it('should works with a RegExp', function() {
			'John1970'.test({ regexp: /\d+$/g }).should.equal(true);
		});
	});
});
