'use strict'

if( 'is-empty' in Array.prototype === false ) {
	Array.prototype.isEmpty = function() {
		return this.length === 0;
	};
}

export default Array.prototype.isEmpty;
