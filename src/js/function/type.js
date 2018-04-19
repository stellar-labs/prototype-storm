'use strit';

export function type( variable ) {
	if( variable === null || variable === undefined ) {
		return variable;
	}
	else {
		return variable.constructor.name;
	}
}