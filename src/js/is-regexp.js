'use strict';

if( 'isRegexp' in Object.prototype === false ) {
    /**
     * @summary Returns true if the element is a RegExp, else returns false.
     * @returns {Boolean}
     * @example /[a-z]/.isRegexp() // true
     * @example '/[a-z]/'.isRegexp() // false
     * @since 0.1.0
     * @see https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/is-regexp.min.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/src/js/is-regexp.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/test/is-regexp.js
     */ 
    Object.prototype.isRegexp = function() {
        // RegExp
        if( this.constructor === RegExp ) {
            return true;
        }
        
        return false;
    };
}

export default Object.prototype.isRegexp;