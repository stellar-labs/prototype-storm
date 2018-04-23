'use strict'

import type from '../function/type.js';

if( 'last' in Array.prototype === false ) {
	Array.prototype.last = function(options = { count: 1 }) {
		let option_type = type(options);

		if( option_type !== 'Object' ) {
			throw new Error('Array.prototype.last expects the option to be an Object, ', option_type, ' given.');
		}

		if( 'count' in options && type(options.count) !== 'Number' ) {
			throw new Error('Array.prototype.last expects option "count" to be a Number, ', type(options.count), ' given.');
		}

		return options.count === 0 ? null : (options.count < 2) ? this.slice(-options.count)[0] : this.slice(-options.count);
	};
}

export default Array.prototype.last;
