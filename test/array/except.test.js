'use strict'

var should = require('chai').should();

import except from '../../src/js/array/except.js';

describe('Array', function() {
	describe('except', function() {
		it('should return the correct items', function() {
			['php', 'nodejs', 'python', 'javascript'].except({ items: ['javascript'] }).should.deep.equal(['php', 'nodejs', 'python']);
		});

		it('should throw an error if the items option is not set', function() {
			should.Throw(function() {
				[].except();
			});
		});

		it('should throw an error if the items option is null', function() {
			should.Throw(function() {
				[].except({ items: null });
			});
		});

		it('should throw an error if the items option is undefined', function() {
			should.Throw(function() {
				[].except({ items: undefined });
			});
		});

		it('should throw an error if the items option is a String', function() {
			should.Throw(function() {
				[].except({ items: 'foo' });
			});
		});

		it('should throw an error if the items option is an Object', function() {
			should.Throw(function() {
				[].except({ items: {'foo': 'bar'} });
			});
		});

		it('should throw an error if the items option is a Symbol', function() {
			should.Throw(function() {
				[].except({ items: new Symbol('foo') });
			});
		});

		it('should throw an error if the items option is a Number', function() {
			should.Throw(function() {
				[].except({ items: 42 });
			});
		});

		it('should throw an error if the items option is a Boolean', function() {
			should.Throw(function() {
				[].except({ items: true });
			});
		});
	});
});
