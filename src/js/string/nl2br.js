'use strict';

if( 'nl2br' in String.prototype === false ) {
	String.prototype.nl2br = function({strict = false} = {}) {
  		return this.replace(/\n/gm, strict ? '<br/>' : '<br>');
	}	
}

export default String.prototype.nl2br;