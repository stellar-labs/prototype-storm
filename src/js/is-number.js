'use strict';

if( 'isNumber' in Object.prototype === false ) {
    /**
     * @summary Return true if the element is a number, else returns false.
     * @returns {Boolean}
     * @example Number(42).isNumber() // true
     * @example [42].isNumber() // false
     * @since 0.1.0
     * @see https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/is-number.min.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/src/js/is-number.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/test/is-number.js
     */ 
    Object.prototype.isNumber = function() {
        // Number
        if( this.constructor === Number ) {
            return true;
        }

        return false;
    };
}

export default Object.prototype.isNumber;