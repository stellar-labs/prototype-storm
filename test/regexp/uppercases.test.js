'use strict'

var should = require('chai').should();

import uppercases from '../../src/js/regexp/uppercases.js';

describe('Regexp', function() {
	describe('uppercases', function() {
		it('should replace non uppercases', function() {
			var regexp = new RegExp('[^' + RegExp.UPPERCASES + ']', 'g');

			'31IRPJGZKBVL?A2¨HOTG2HPG¨HG82A++29G&"étgzl^ù*!vqb:ùn;,ùknpgihz)iàtkz'.replace(regexp, '').should.equal('IRPJGZKBVLAHOTGHPGHGAG');
		});
	});
});
