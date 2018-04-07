'use strict';

if( 'stripTags' in String.prototype === false ) {
	String.prototype.stripTags = function() {
	  	return this.replace(/<(?:.|\n)*?>/gm, '');
	}
}

export default String.prototype.stripTags;