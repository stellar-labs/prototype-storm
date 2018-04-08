'use strict'

var should = require('chai').should();

import toAscii from '../../src/js/string/to-ascii.js';

describe('String', function() {
	describe('toAscii', function() {
		it('should return the same string', function() {
			let text = 'Hello world, my string is unicode free';

			text.toAscii().should.equal(text);
		});

		it('should return the same string even with non characters', function() {
			let text = 'Hey John! Happy to see you, I have issues with 3**16, can you help me ??';

			text.toAscii().should.equal(text);
		});

		it('should convert non ascii to ascii', function() {
			let before = "Voix ambiguë d'un cœur qui, à l'arrivée du zéphyr, préfère les jattes de kiwis.";
			let after = "Voix ambigue d'un coeur qui, a l'arrivee du zephyr, prefere les jattes de kiwis.";

			before.toAscii().should.equal(after);
		});
	});
});
