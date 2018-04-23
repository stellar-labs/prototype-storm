'use strict'

var should = require('chai').should();

import last from '../../src/js/array/last.js';

describe('Array', function() {
	describe('last', function() {
		it('should throw an error if the count option is null', function() {
			should.Throw(function() {
				[].last({ count: null });
			});
		});

		it('should throw an error if the option is null', function() {
			should.Throw(function() {
				[].last(null);
			});
		});

		it('should throw an error if the option is a Number', function() {
			should.Throw(function() {
				[].last(1);
			});
		});

		it('should throw an error if the option is an Array', function() {
			should.Throw(function() {
				[].last([]);
			});
		});

		it('should throw an error if the option is a Boolean', function() {
			should.Throw(function() {
				[].last(true);
			});
		});

		it('should throw an error if the option is a String', function() {
			should.Throw(function() {
				[].last('');
			});
		});

		it('should throw an error if the option is a Symbol', function() {
			should.Throw(function() {
				[].last(new Symbol('foo'));
			});
		});

		it('should throw an error if the option is undefined', function() {
			[].last(undefined);
		});

		it('should throw an error if the count option is undefined', function() {
			should.Throw(function() {
				[].last({ count: undefined });
			});
		});

		it('should throw an error if the count option is an Array', function() {
			should.Throw(function() {
				[].last({ count: [] });
			});
		});

		it('should throw an error if the count option is an Object', function() {
			should.Throw(function() {
				[].last({ count: {} });
			});
		});

		it('should throw an error if the count option is a Symbol', function() {
			should.Throw(function() {
				[].last({ count: new Symbol('foo') });
			});
		});

		it('should throw an error if the count option is a Boolean', function() {
			should.Throw(function() {
				[].last({ count: true });
			});
		});

		it('should throw an error if the count option is a String', function() {
			should.Throw(function() {
				[].last({ count: '' });
			});
		});

		it('should return the last element if used without option', function() {
			[1, 2, 3, 4].last().should.equal(4);
		});

		it('should return the nth elements if used with the count option', function() {
			[1, 2, 3, 4].last({ count: 2 }).should.deep.equal([3, 4]);
		});

		it('should return the last element if used with the count option to 1', function() {
			[1, 2, 3, 4].last({ count: 1 }).should.deep.equal(4);
		});

		it('should return no elemnt if used with the count option to 0', function() {
			var expected = null;
			var actual = [1, 2, 3, 4].last({ count: 0 });

			should.equal(actual, expected);
		});

		it('should works even with float numbers', function() {
			[1, 2, 3, 4].last({ count: 1.5 }).should.equal(4);
		});

		it('should works event with float numbers greater or equal to 2', function() {
			[1, 2, 3, 4].last({ count: 3.9 }).should.deep.equal([2, 3, 4]);
		});
	});
});
