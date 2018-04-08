'use strict'

var should = require('chai').should();

import toKebabCase from '../../src/js/string/to-kebab-case.js';

describe('String', function() {
	describe('toKebabCase', function() {
		it('should return the same string', function() {
			var slug = 'already-kebab-case';

			slug.toKebabCase().should.equal(slug);
		});

		it('should convert kebab case with unicode to ascii', function() {
			'éy-this-is-français-wtf'.toKebabCase().should.equal('ey-this-is-francais-wtf');
		});

		it('should convert pascal case', function() {
			'PascalCase'.toKebabCase().should.equal('pascal-case');
		});

		it('should convert pascal case with non ascii', function() {
			'PascalFrançaisCase'.toKebabCase().should.equal('pascal-francais-case');
		});

		it('should convert snake case', function() {
			'snake_case'.toKebabCase().should.equal('snake-case');
		});

		it('should convert snake case with non ascii', function() {
			'snake_français_case'.toKebabCase().should.equal('snake-francais-case');
		});

		it('should convert camel case', function() {
			'camelCase'.toKebabCase().should.equal('camel-case');
		});

		it('should convert camel case with non ascii', function() {
			'camelFrançaisCase'.toKebabCase().should.equal('camel-francais-case');
		});
	});
});