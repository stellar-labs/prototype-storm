'use strict';

if( 'is' in Object.prototype === false ) {
    /**
     * @summary Check if the element is of the desired type.
     * @param {*} options.type type to check the element on
     * @returns {Boolean}
     * @example ([1, 2]).is({ type: Array }) // true
     * @example ([1, 2]).is({ type: Boolean }) // false
     * @since 0.1.0
     * @see https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/is.min.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/src/js/is.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/test/is.js
     */ 
    Object.prototype.is = function(options) {
        return this.constructor === options.type;
    };
}

export default Object.prototype.is;