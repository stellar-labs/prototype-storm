'use strict';

if( 'hasNumber' in Object.prototype === false ) {
    /**
     * @summary Returns true if the element has a number.
     * @returns {Boolean}
     * @example '42'.hasNumber() // true
     * @example 'hello world'.hasNumber() // false
     * @since 0.1.0
     * @see https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/has-number.min.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/src/js/has-number.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/test/has-number.js
     */ 
    Object.prototype.hasNumber = function() {
        // Number
        if( this.constructor === Number ) {
            return true;
        }

        // String
        if( this.constructor === String ) {
            return /[0-9]/g.test(this);
        }
    };
}

export default Object.prototype.hasNumber;