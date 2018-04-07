'use strict'

var should = require('chai').should();

import only from '../../src/js/array/only.js';

describe('Array', function() {
	describe('only', function() {
		it('should return required keys', function() {
			['php', 'nodejs', 'python', 'ruby'].only({ items: ['nodejs'] }).should.deep.equal(['nodejs']);
		});

		it('should return an empty array when filtering on an empty array', function() {
			['php', 'nodejs', 'python', 'ruby'].only({ items: [] }).should.deep.equal([]);
		});

		it('should return the same array', function() {
			let items = ['php', 'nodejs', 'python', 'ruby'];

			items.only({ items: items }).should.deep.equal(items);
		});

		it('should throw an exception when omitting the items option', function() {
			should.Throw(function() {
				[].only();
			});
		});

		it('should throw an exception on null value for the item option', function() {
			should.Throw(function() {
				[].only({ items: null });
			});
		});

		it('should throw an exception on value not an array for the item option', function() {
			should.Throw(function() {
				[].only({ items: { foo: 'bar' } });
			});
		});

		it('should throw an exception if the parameter is null', function() {
			should.Throw(function() {
				[].only(null);
			});
		});

		it('should throw an exception if the parameter is not an object', function() {
			should.Throw(function() {
				[].only([]);
			});
		});
	});
});
