'use strict';

if( 'values' in Object.prototype === false ) {
    /**
     * @summary Returns an array of the values of the element.
     * @returns {Array}
     * @example ({a: 1, b: 2}).values() // [1, 2]
     * @example ({}).values() // []
     * @since 0.1.0
     * @see https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/values.min.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/src/js/values.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/test/values.js
     */ 
    Object.prototype.values = function() {
        // Array
        if( this.constructor === Array ) {
            return this;
        }

        // Boolean
        if( this.constructor === Boolean ) {
            // ...
        }

        // Date
        if( this.constructor === Date ) {
            // ...
        }

        // Number
        if( this.constructor === Number ) {
            // ...
        }

        // Object
        if( this.constructor === Object ) {
            return Object.values(this);
        }

        // RegExp
        if( this.constructor === RegExp ) {
            // ...
        }

        // String
        if( this.constructor === String ) {
            // ...
        }
    };
}

export default Object.prototype.values;