'use strict';

if( typeof type !== 'function' ) {
	var type = function(variable) {
		return variable === null ? 'null' : (variable === undefined) ? 'undefined' : variable.constructor.name;
	}
}

export default type;