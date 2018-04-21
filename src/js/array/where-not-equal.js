'use strict'

if( 'where-not-equal' in Array.prototype === false ) {
	Array.prototype.whereNotEqual = function(options) {
		if( 'value' in options === false ) {
			throw new Error('Array.prototype.whereNotEqual expects option "value" to be set');
		}

		return this.filter(function(item) {
			return 'strict' in options && options.strict === true ? (item !== options.value) : (item != options.value);
		});
	};
}

export default Array.prototype.whereNotEqual;
