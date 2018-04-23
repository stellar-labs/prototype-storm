'use strict'

import type from '../function/type.js';

if( 'except' in Array.prototype === false ) {
	Array.prototype.except = function(options) {
		if( 'items' in options === false ) {
			throw new Error('Array.prototype.except expects option "items" to be set.');
		}

		let items_type = type(options.items);

		if( items_type !== 'Array' ) {
			throw new Error('Array.prototype.except expects option "items" to be an Array, ', items_type, ' given.');
		}

		return this.filter(function(item) {
			return options.items.includes(item) === false;
		});
	};
}

export default Array.prototype.except;
