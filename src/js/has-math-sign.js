'use strict';

if( 'hasMathSign' in Object.prototype === false ) {
    /**
     * @summary Returns true if the element contains mathematical signs.
     * @returns {Boolean}
     * @example '42 + 7'.hasMathSign() // true
     * @example 'hello world'.hasMathSign() // false
     * @since 0.1.0
     * @see https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/has-math-sign.min.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/src/js/has-math-sign.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/test/has-math-sign.js
     */ 
    Object.prototype.hasMathSign = function() {
        // String
        if( this.constructor === String ) {
            return /[\p{Math}]/gu.test(this);
        }
    };
}

export default Object.prototype.hasMathSign;