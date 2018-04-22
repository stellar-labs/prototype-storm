'use strict'

if( 'is-json' in String.prototype === false ) {
	String.prototype.isJson = function() {
		let is_json = true;

		try {
			JSON.parse(this);
		}
		catch( error ) {
			if( error instanceof SyntaxError ) {
				is_json = false;
			}
		}

		return is_json;
	};
}

export default String.prototype.isJson;
