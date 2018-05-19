'use strict';

if( 'isUppercase' in Object.prototype === false ) {
    /**
     * @summary Returns true if the element is only composed of uppercases.
     * @returns {Boolean}
     * @example "HELLO".isUppercase() // true
     * @example "Hello".isUppercase() // false
     * @since 0.1.0
     * @see https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/is-uppercase.min.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/src/js/is-uppercase.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/test/is-uppercase.js
     */ 
    Object.prototype.isUppercase = function() {
        // String
        if( this.constructor === String ) {
            return /\p{L}/gu.test(this) && /[\p{Ll}]/gu.test(this) === false;
        }
    };
}

export default Object.prototype.isUppercase;