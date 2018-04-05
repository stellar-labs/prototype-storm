fs = require('fs');

const argument_count = process.argv.length;

// Checks if the argument count is correct
if( argument_count !== 3 ) {
	throw 'make expects parameter 1 to be set';
}

argument = process.argv[2]

// Checks if the file do not already exists
file_exists = fs.existsSync('./src/js/' + argument + '.js');

if( file_exists === true ) {
	throw '"src/js/' + argument + '.js" already exists, command canceled.';
}

// Checks if the spec does not already exists
file_exists = fs.existsSync('./spec/' + argument + '.js');

if( file_exists === true ) {
	throw '"spec/' + argument + '.js" already exists, command canceled.';
}

// Create the file 
var code = `'use strict'

if( '` + argument + `' in String.prototype === false ) {
	String.prototype.`+ argument + ` = function() {
		// have fun!
	};
}
`;

fs.writeFileSync('./src/js/' + argument + '.js', code, 'utf8', function(error) {
	if( error ) {
		throw 'Could not create the file src/js/' + argument + '.js';
	}
});

console.log('src/js/' + argument + '.js prototype created.');

code = `'use strict'

import ` + argument + ` from '../../src/js/` + argument + `.js';

describe('` + argument + ` tests', function() {
	/**
	 * @see https://jasmine.github.io/api/edge/matchers.html
	 */
});
`;

fs.writeFileSync('./spec/' + argument + '.spec.js', code, function(error) {
	if( error ) {
		throw 'Could not create the file spec/' + argument + '.js, only src/js/' + argument + '.js have been created, command canceled.'
	}
});

console.log('spec/' + argument + '.js spec created.');

console.log('end of the command.');