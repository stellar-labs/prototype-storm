'use strict';

if( 'isArray' in Object.prototype === false ) {
    /**
     * @summary Return true if the element is an array.
     * @returns {Boolean}
     * @example new Date().isArray() // false
     * @example [].isArray() // true
     * @since 0.1.0
     * @see https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/is-array.min.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/src/js/is-array.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/test/is-array.js
     */ 
    Object.prototype.isArray = function() {
        // Array
        if( this.constructor === Array ) {
            return true;
        }

        return false;
    };
}

export default Object.prototype.isArray;