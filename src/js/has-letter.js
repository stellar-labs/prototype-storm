'use strict';

if( 'hasLetter' in Object.prototype === false ) {
    /**
     * @summary Returns true if the element contains letters.
     * @returns {Boolean}
     * @example 'hello world'.hasLetters() // true
     * @example '42 - 7 = ??'.hasLetter() // false
     * @since 0.1.0
     * @see https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/has-letter.min.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/src/js/has-letter.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/test/has-letter.js
     */ 
    Object.prototype.hasLetter = function() {
        // String
        if( this.constructor === String ) {
            return /[\p{Alphabetic}]/gu.test(this);
        }
    };
}

export default Object.prototype.hasLetter;