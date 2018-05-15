'use strict';

if( 'toKebabCase' in Object.prototype === false ) {
    /**
     * @summary Returns the kebab-case version of the string.
     * @returns {String}
     * @example 'hello world'.toKebabCase() // 'hello-world'
     * @since 0.1.0
     * @see https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/to-kebab-case.min.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/src/js/to-kebab-case.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/test/to-kebab-case.js
     */ 
    Object.prototype.toKebabCase = function() {
        // String
        if( this.constructor === String ) {
            return this.replace(/[^a-zA-Z0-9-]/g, '-')
                .replace(/([A-Z])([A-Z])([a-z])/g, '$1-$2$3')
                .replace(/([a-z])([A-Z])/g, '$1-$2')
                .replace(/[-]{2}/g, '-')
                .replace(/^[-]/, '')
                .replace(/[-]$/, '')
                .toLowerCase();
        }
    };
}

export default Object.prototype.toKebabCase;