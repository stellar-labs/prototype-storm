'use strict';

if( 'update' in Object.prototype === false ) {
    /**
     * @summary Update the values of the elements according to an object.
     * @returns {*}
     * @example ({a: 1, b: 2}).update({ a: 3 }) // {a: 3, b: 2}
     * @example [1, 2, 3].update({ 0: 4 }) // [4, 2, 3]
     * @example "hello".update({ 0: 'y' }) // "yello"
     * @since 0.1.0
     * @see https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/update.min.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/src/js/update.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/test/update.js
     */ 
    Object.prototype.update = function(values = {}) {
        // Array
        if( this.constructor === Array ) {
            let result = this;
            
            for( const key in values ) {
                let value = values[key];

                if( typeof value === 'function' ) {
                    continue;
                }

                result[key] = values[key];
            }

            return result;
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
            let result = this;

            for( const key in values ) {
                result[key] = values[key];
            }

            return result;
        }

        // RegExp
        if( this.constructor === RegExp ) {
            // ...
        }

        // String
        if( this.constructor === String ) {
            let result = this;            
  
            for( const key in values ) {
                let value = values[key];

                // Checking that is not necessary if we would did a String.prototype.update
                if( typeof value === 'function' ) {
                    continue;
                }

                result = result.slice(0, key) + value + result.slice(key + 1);
            }
            
            return result;
        }
    };
}

export default Object.prototype.update;