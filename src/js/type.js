'use strict';

if( 'type' in Object.prototype === false ) {
    /**
     * @summary Returns the type of the element.
     * @returns {*}
     * @example [1, 2].type() // Array
     * @example [1, 2].type({ toString: true }) // "array"
     * @since 0.1.0
     * @see https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/type.min.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/src/js/type.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/test/type.js
     */ 
    Object.prototype.type = function(options = { toString: false }) {
        return options.toString === true ? this.constructor.name.toLocaleLowerCase() : this.constructor;
    };
}

export default Object.prototype.type;