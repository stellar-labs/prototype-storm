'use strict';

if( 'format' in Object.prototype === false ) {
    /**
     * @summary Return the formated element.
     * @returns {String}
     * @example "Hi {name}".format({ name: "John" }) // "Hi John"
     * @since 0.1.0
     * @see https://github.com/stellar-labs/prototype-storm/v0.1.0/format.min.js
     * @see https://github.com/stellar-labs/prototype-storm/format.js
     * @see https://github.com/stellar-labs/prototype-storm/test/format.js
     */ 
    Object.prototype.format = function(options = {}) {
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
            // ...
        }

        // RegExp
        if( this.constructor === RegExp ) {
            // ...
        }

        // String
        if( this.constructor === String ) {
            let result = this;

            for( let key in options ) {
                result = result.replace('{' + key + '}', options[key]);
            }

            return result;
        }
    };
}

export default Object.prototype.format;