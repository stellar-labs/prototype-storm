'use strict'

import type from '../function/type.js';

if( 'where-equal' in Array.prototype === false ) {
	Array.prototype.whereEqual = function(options) {
		if( 'value' in options === false ) {
			throw new Error('Array.prototype.whereEqual expects options "value" to be set.');
		}

		return this.filter(function(item) {
			return 'strict' in options && options.strict === true ? (item === options.value) : (item == options.value);
		});
	};
}

export default Array.prototype.whereEqual;
