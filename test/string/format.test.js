'use strict'

var should = require('chai').should();

import format from '../../src/js/string/format.js';

describe('String', function() {
	describe('format', function() {
		it('should return the correct formated text', function() {
			'Hi {name}. Welcome to the {page} page.'.format({ name: 'John', page: 'home' }).should.equal('Hi John. Welcome to the home page.');
		});

		it('should return the same text', function() {
			let text = 'Hi John. Welcome to the dashboard.';

			text.format().should.equal(text);
		});

		it('should return the empty string if the input was also empty', function() {
			let text = '';

			text.format().should.equal(text);
		});

		it('should replace multiple occurence of the same option', function() {
			'<h1>{page}</h1><p>Hi {name} and welcome to the {page} page.</p>'.format({ name: 'John', page: 'Home' }).should.equal('<h1>Home</h1><p>Hi John and welcome to the Home page.</p>');
		});
	});
});
