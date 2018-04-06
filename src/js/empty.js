'use strict';

if( 'empty' in String.prototype === false ) {
	String.prototype.empty = function() {
  		return this === '';
  	}
}

export default String.prototype.empty;