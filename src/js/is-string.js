'use strict';

if( 'isString' in Object.prototype === false ) {
    /**
     * @summary Returns true if the element is a string, else returns false.
     * @returns {Boolean}
     * @example "hello".isString() // true
     * @example ["hello"].isString() // false
     * @since 0.1.0
     * @see https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/is-string.min.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/src/js/is-string.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/test/is-string.js
     */ 
    Object.prototype.isString = function() {
        // String
        if( this.constructor === String ) {
            return true;
        }

        return false;
    };
}

export default Object.prototype.isString;