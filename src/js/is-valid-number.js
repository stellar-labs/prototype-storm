'use strict';

if( 'isValidNumber' in Object.prototype === false ) {
    /**
     * @summary Returns true if the number is valid, else returns false.
     * @returns {Boolean}
     * @example (42).isValidNumber() // true
     * @example Number('test').isValidNumber() // false
     * @example "test".isValidNumber() // false
     * @since 0.1.0
     * @see https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/is-valid-number.min.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/src/js/is-valid-number.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/test/is-valid-number.js
     */ 
    Object.prototype.isValidNumber = function() {

        return isNaN(this.toString()) === false;
    };
}

export default Object.prototype.isValidNumber;