'use strict';

if( 'isArray' in Object.prototype === false ) {
    /**
     * @summary Return true if the element is an array.
     * @returns {Boolean}
     * @example new Date().isArray() // false
     * @example [].isArray() // true
     * @since 0.1.0
     * @see https://github.com/stellar-labs/prototype-storm/v0.1.0/is-array.min.js
     * @see https://github.com/stellar-labs/prototype-storm/is-array.js
     * @see https://github.com/stellar-labs/prototype-storm/test/is-array.js
     */ 
    Object.prototype.isArray = function() {
        // Array
        if( this.constructor === Array ) {
            return true;
        }

        // Boolean
        if( this.constructor === Boolean ) {
            return false;
        }

        // Date
        if( this.constructor === Date ) {
            return false;
        }

        // Number
        if( this.constructor === Number ) {
            return false;
        }

        // Object
        if( this.constructor === Object ) {
            return false;
        }

        // RegExp
        if( this.constructor === RegExp ) {
            return false;
        }

        // String
        if( this.constructor === String ) {
            return false;
        }
    };
}

export default Object.prototype.isArray;