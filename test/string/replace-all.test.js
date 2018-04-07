'use strict'

var should = require('chai').should();

import replaceAll from '../../src/js/string/replace-all.js';

describe('String', function() {
	describe('replaceAll', function() {
		it('should return the replaced text', function() {
			'Hi {name}, how are you today?'.replaceAll({ old: '{name}', new: 'John' }).should.equal('Hi John, how are you today?');
		});

		it('should remove parts', function() {
			'This sentence after all is quite simple after all.'.replaceAll({ old: 'after all', new: '' }).should.equal('This sentence  is quite simple .');
		});

		it('should retun the same text after we replaced nothing by nothing', function() {
			var text = 'Hi everyone, how are you?!';

			text.replaceAll({ old: '', new: '' }).should.equal(text);
		});

		it('should throw an error if no options was passed', function() {			
			should.Throw(function() {
				''.replaceAll();
			});
		});

		it('should throw an error if old option was not passed', function() {
			should.Throw(function() {
				''.replaceAll({ new: '' });
			});
		});

		it('should throw an error if new option was not passed', function() {
			should.Throw(function() {
				''.replaceAll({ old: '' });
			});
		});
	});
});
