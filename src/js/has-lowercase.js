'use strict';

if( 'hasLowercase' in Object.prototype === false ) {
    /**
     * @summary Returns true if the element contains a lowercase.
     * @returns {Boolean}
     * @example 'Hello'.hasLowercase() // true
     * @example 'HELLO'.hasLowercase() // false
     * @since 0.1.0
     * @see https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/has-lowercase.min.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/src/js/has-lowercase.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/test/has-lowercase.js
     */ 
    Object.prototype.hasLowercase = function() {
        // String
        if( this.constructor === String ) {
            return /[\p{Ll}]/gu.test(this);
        }
    };
}

export default Object.prototype.hasLowercase;