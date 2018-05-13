'use strict';

if( 'max' in Object.prototype === false ) {
    Object.prototype.max = function() {
        // Array
        if( this.constructor === Array ) {
            if( this.length === 0 ) {
                return null;    
            }

            let max = this[0];

            for( let i = 1; i < this.length; i++ ) {
                if( this[i] > max ) {
                    max = this[i];
                }
            }

            return max !== null ? Number(max) : max;
        }

        // Object
        if( this.constructor === Object ) {
            const length = Object.keys(this).length;

            let result = null;

            for( let key in this ) {
                let value = this[key];
                  
                if( isNaN(value) === false && value > result ) {
                    result = value;
                }
                else {
                    let is_object = false;

                    try {
                        is_object = 'constructor' in value && value.constructor === Object;
                    }
                    catch(error) {}

                    if( is_object === true ) {
                        let max = value.max();

                        if( max > result ) {
                            result = max;
                        }
                    }
                }
            }

            return result !== null ? Number(result) : result;
        }
    };
}

export default Object.prototype.max;