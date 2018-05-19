'use strict';

if( 'hasUppercase' in Object.prototype === false ) {
    /**
     * @summary Returns true if the element contains an uppercase.
     * @returns {Boolean}
     * @example 'Hello'.hasUppercase() // true
     * @example 'hello'.hasUppercase() // false
     * @since 0.1.0
     * @see https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/has-uppercase.min.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/src/js/has-uppercase.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/test/has-uppercase.js
     */ 
    Object.prototype.hasUppercase = function() {
        // String
        if( this.constructor === String ) {
            return /[\p{Lu}]/gu.test(this);
        }
    };
}

export default Object.prototype.hasUppercase;