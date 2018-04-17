'use strict'

var should = require('chai').should();

import letters from '../../src/js/regexp/letters.js';

describe('Regexp', function() {
	describe('letters', function() {
		it('should match letters only', function() {
			var regexp = new RegExp('[^' + RegExp.LETTERS + ']', 'g');

			'&&éà&é)ç_&)+*9&é79*é&8/\'*&8/é\'*7&+9\'56&é"&-*é/*&é\'é&-*é&+8956"230.é&+&*-\'i)_oà()\'é$ù"*ééç&'.replace(regexp, '').should.equal('éàéçéééééééééioàéùééç');
		});
	});
});
