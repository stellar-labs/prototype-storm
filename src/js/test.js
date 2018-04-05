'use strict'
export default 

	String.prototype.test = function(options) {
		if( (typeof options.regexp) === 'undefined' ) {
			throw 'String.prototype.test expects option "regexp" to be set';
		}

		if( typeof options.regexp !== 'regexp' && typeof options.regexp !== 'string' ) {
			throw 'String.prototype.test expects options "regexp" to be either string or regexp (type "' + typeof options.regexp + '" given)';
		}

		if( options.regexp.trim().length < 1 ) {
			throw 'String.prototype.test expects options "regex" not to be empty';
		}

		return this.test(options.regexp);
	};

