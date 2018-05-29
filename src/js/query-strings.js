'use strict';

if( 'queryStrings' in Object.prototype === false ) {
	/**
	 * @summary Returns an object of the query string from the element.
	 * @returns {Object}
	 * @example 'http://example.com/path/to/page?name=ferret&color=purple'.queryStrings() // { name: 'ferret', color: 'purple' }
	 * @since 0.1.0
	 * @see https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/query-strings.min.js
	 * @see https://github.com/stellar-labs/prototype-storm/blob/master/src/js/query-strings.js
	 * @see https://github.com/stellar-labs/prototype-storm/blob/master/test/query-strings.js
	 */ 
	Object.prototype.queryStrings = function() {
		// URL
		if( this.constructor === String ) {
			let result = {};
			let url = this.replace(/#.*$/, '');
		
			const matches = url.toString().match(/\?(.*)$/);

			if( matches !== null && matches.length === 2 ) {
				matches[1].split('&').forEach(function(element) {
					  let part = element.split('=');
			
					  if( part.length === 2 ) {
						result[part[0]] = part[1];
					  }
				});
			}
			
			return result;
		}
	};
}

export default Object.prototype.queryStrings;