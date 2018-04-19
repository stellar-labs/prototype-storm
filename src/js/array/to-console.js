'use strict'

if( 'to-console' in Array.prototype === false ) {
	Array.prototype.toConsole = function() {
		console.log(this);

		return this;
	};
}

export default Array.prototype.toConsole;
