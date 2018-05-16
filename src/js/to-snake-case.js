'use strict';

if( 'toSnakeCase' in Object.prototype === false ) {
    /**
     * @summary Returns the string in snake_case format.
     * @returns {String}
     * @example 'hello world'.toSnakeCase() // "hello_world"
     * @since 0.1.0
     * @see https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/to-snake-case.min.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/src/js/to-snake-case.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/test/to-snake-case.js
     */ 
    Object.prototype.toSnakeCase = function() {
        // String
        if( this.constructor === String ) {
            return this.replace(/[^a-zA-Z0-9_]/g, '_')
                .replace(/([a-z])([A-Z])/g, '$1_$2')
                .replace(/([A-Z])([A-Z])([a-z])/g, '$1_$2$3')
                .replace(/[_]{2,}/g, '_')
                .replace(/^_/, '')
                .replace(/_$/, '')
                .toLowerCase();
        }
    };
}

export default Object.prototype.toSnakeCase;