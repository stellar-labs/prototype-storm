'use strict';

if( 'isBoolean' in Object.prototype === false ) {
    /**
     * @summary Returns true if the element is a boolean, else returns false.
     * @returns {Boolean}
     * @example (true).isBoolean() // true
     * @example (1).isBoolean() // false
     * @since 0.1.0
     * @see https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/is-boolean.min.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/src/js/is-boolean.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/test/is-boolean.js
     */ 
    Object.prototype.isBoolean = function() {
        // Boolean
        if( this.constructor === Boolean ) {
            return true;
        }

        return false;
    };
}

export default Object.prototype.isBoolean;