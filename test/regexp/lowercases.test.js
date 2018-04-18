'use strict'

var should = require('chai').should();

import lowercases from '../../src/js/regexp/lowercases.js';

describe('Regexp', function() {
	describe('lowercases', function() {
		it('should replace non lowercases', function() {
			var regexp = new RegExp('[^' + RegExp.LOWERCASES + ']', 'g');

			'é_çà)&éparoijgnklgzojpidçuàu"ép^pe(hkrj("\'56ehr2+39T8645+ZAE2GZ1F4+88ZHE7+R9G+Z84G61Bé'.replace(regexp, '').should.equal('éçàéparoijgnklgzojpidçuàuéppehkrjehré');
		});
	});
});
