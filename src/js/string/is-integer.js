'use strict'

if( 'is-integer' in String.prototype === false ) {
	String.prototype.isInteger = function() {
		return isNaN(parseInt(this)) === false && parseInt(this) === parseFloat(this);
	};
}

export default String.prototype.isInteger;
