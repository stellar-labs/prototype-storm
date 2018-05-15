'use strict';

if( 'isObject' in Object.prototype === false ) {
    /**
     * @summary Returns true if the element is an object, else returns false.
     * @returns {Boolean}
     * @example {}.isObject() // true
     * @example [].isObject() // false
     * @since 0.1.0
     * @see https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/is-object.min.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/src/js/is-object.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/test/is-object.js
     */ 
    Object.prototype.isObject = function() {
        // Object
        if( this.constructor === Object ) {
            return true;
        }

        return false;
    };
}

export default Object.prototype.isObject;