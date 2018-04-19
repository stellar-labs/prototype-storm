'use strict'

if( 'to-console' in String.prototype === false ) {
	String.prototype.toConsole = function() {
		console.log(this);

		return this;
	};
}

export default String.prototype.toConsole;
