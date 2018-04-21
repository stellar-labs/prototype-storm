'use strict'

import type from '../function/type.js';

if( 'test' in String.prototype === false ) {
	String.prototype.test = function(options) {
		if( 'regexp' in options === false ) {
			throw new Error('String.prototype.test expects option "regexp" to be set.');
		}

		let regexp_type = type(options.regexp);

		if( regexp_type !== 'RegExp' ) {
			throw new Error('String.prototype.test expects option "regexp" to be either String or Regexp, ', regexp_type, ' given.');
		}

		return this.match(options.regexp) !== null;
	};
}

export default String.prototype.test;
