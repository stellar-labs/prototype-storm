'use strict'

if( 'only' in Array.prototype === false ) {
	Array.prototype.only = function(options) {
		try {
			if( options.constructor.name !== 'Object' ) {
				throw new Error('Array.prototype.only expects parameter 1 to be an object, ', options.constructor.name, ' given.');
			}
		}
		catch( error ) {
			throw new Error('Array.prototype.only expects parameter 1 to be an object.');
		}

		if( 'items' in options === false ) {
			throw new Error('Array.prototype.only expects option "items" to be set.');
		}

		try {
			if( options.items.constructor.name !== 'Array' ) {
				throw new Error('Array.prototype.only expects option "items" to be an array, ', options.items.constructor.name, ' given.');
			}
		}
		catch( error ) {
			throw new Error('Array.prototype.only expects option "items" to be an array.');
		}

		let array = this;
		  
		return array.filter(function(item) {
			return options.items.indexOf(item) !== -1;
		});
	};
}

export default Array.prototype.only;
