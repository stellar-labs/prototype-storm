'use strict';

if( 'isLowercase' in Object.prototype === false ) {
    /**
     * @summary Returns true if the string is onl composed of lowercases.
     * @returns {Boolean}
     * @example 'hello'.isLowercase() // true
     * @example 'HELLO'.isLowercase() // false
     * @since 0.1.0
     * @see https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/is-lowercase.min.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/src/js/is-lowercase.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/test/is-lowercase.js
     */ 
    Object.prototype.isLowercase = function() {
        // String
        if( this.constructor === String ) {
            return /[\p{L}]/gu.test(this) && /[\p{Lu}]/gu.test(this) === false;
        }
    };
}

export default Object.prototype.isLowercase;