'use strict';

if( 'keys' in Object.prototype === false ) {
    /**
     * @summary Returns an array containing the keys of the element.
     * @returns {Array}
     * @example ({a: 1, b: 2}).keys() // ['a', 'b']
     * @example ({}).keys() // []
     * @since 0.1.0
     * @see https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/keys.min.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/src/js/keys.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/test/keys.js
     */ 
    Object.prototype.keys = function() {
        // Array
        if( this.constructor === Array ) {
            // ...
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
            return Object.keys(this);
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

export default Object.prototype.keys;