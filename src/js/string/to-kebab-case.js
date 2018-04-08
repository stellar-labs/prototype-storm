'use strict'

import './to-ascii.js';

if( 'to-kebab-case' in String.prototype === false ) {
	String.prototype.toKebabCase = function() {
		let string = this;
  
		string = string.toAscii().replace(/[^a-z]/gi, '-');
		  
		string = string.replace(/[a-z][A-Z]/g, function(match, index) {
		  	return match[0] + '-' + match[1];
		}).replace(/(^-*)|(-*$)/g, '').replace(/-{2,}/g, '-');
		  
		return string.toLowerCase();
	};
}

export default String.prototype.toKebabCase;
