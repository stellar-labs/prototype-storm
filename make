fs = require('fs');

/**
 * @todo import camelCase from './src/js/string/camel-case.js';
 */
function camelCase(str) {
	return str.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
}

const argument_count = process.argv.length;

// Checks if the argument count is correct
if( argument_count !== 4 ) {
	throw 'make usage: npm make <type> <feature> (example: npm make string begins-with';
}

const folder = process.argv[2];
const feature = process.argv[3];

// Checks if the file do not already exists
file_exists = fs.existsSync('./src/js/' + folder + '/' + feature + '.js');

if( file_exists === true ) {
	throw '"src/js/' + folder + '/' + feature + '.js" already exists, command canceled.';
}

// Checks if the spec does not already exists
file_exists = fs.existsSync('./test/' + folder + '/' + feature + '.js');

if( file_exists === true ) {
	throw '"test/' + folder + '/' + feature + '.js" already exists, command canceled.';
}

// Create the file 
var code = `'use strict'

if( '` + feature + `' in String.prototype === false ) {
\tString.prototype.`+ camelCase(feature) + ` = function() {
\t\t// have fun!
\t};
}

export default String.prototype.` + camelCase(feature) + `;
`;

fs.writeFileSync('./src/js/' + folder + '/' + feature + '.js', code, 'utf8', function(error) {
	if( error ) {
		throw 'Could not create the file src/js/' + feature + '.js';
	}
});

console.log('src/js/' + folder + '/' + feature + '.js prototype created.');

code = `'use strict'

var should = require('chai').should();

import ` + camelCase(feature) + ` from '../../src/js/` + folder + '/' + feature + `.js';

describe('` + folder[0].toUpperCase() + folder.substring(1) + `', function() {
\tdescribe('` + camelCase(feature) +  `', function() {
\t\t// Put your "it('...')" tests here, have fun!
\t\tit('should exists', function() {
\t\t\t'foo'.` + camelCase(feature) + `().should.exist(true);
\t\t});
\t});
});
`;

fs.writeFileSync('./test/' + folder + '/' + feature + '.test.js', code, function(error) {
	if( error ) {
		throw 'Could not create the file test/' + folder + '/' + feature + '.test.js, only src/js/' + folder + '/' + feature + '.js have been created, command canceled.'
	}
});

console.log('test/' + folder + '/' + feature + '.test.js test created.');

console.log('end of the command.');