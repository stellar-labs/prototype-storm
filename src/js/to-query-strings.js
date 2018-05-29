'use strict';

if( 'toQueryStrings' in Object.prototype === false ) {
    /**
     * @summary Return a query string as a string from the element.
     * @returns {String}
     * @example ({name: 'John', age: 21}).toQueryStrings() // name=John&age=21
     * @since 0.1.0
     * @see https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/to-query-strings.min.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/src/js/to-query-strings.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/test/to-query-strings.js
     */ 
    Object.prototype.toQueryStrings = function() {
        // Object
        if( this.constructor === Object ) {
            let keys = Object.keys(this);

            let results = [];

            for( const key of keys ) {
                let value = this[key];

                if( value === null || value === undefined ) {
                    value = '';
                }
                else if( value.constructor !== String && value.constructor !== Number && value.constructor !== Boolean ) {
                    continue;
                }

                results.push(`${encodeURI(key)}=${encodeURI(value)}`);
            }

            return results.join('&');
        }
    };
}

export default Object.prototype.toQueryStrings;