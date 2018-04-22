'use strict'

if( 'to-json' in Array.prototype === false ) {
	Array.prototype.toJson = function() {
		return JSON.stringify(this);
	};
}

export default Array.prototype.toJson;
