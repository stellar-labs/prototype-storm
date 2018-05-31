'use strict';

if( 'toCamelCase' in Object.prototype === false ) {
    /**
     * @summary Return the camel case version of the element.
     * @returns {String}
     * @example 'hello world'.toCamelCase() // "helloWorld"
     * @since 0.1.0
     * @see https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/to-camel-case.min.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/src/js/to-camel-case.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/test/to-camel-case.js
     */ 
    Object.prototype.toCamelCase = function() {
        // String
        if( this.constructor === String ) {
            const result = this.replace(/([\p{Letter}0-9]+)/gu, function(match) {
                match = match.toLowerCase();

                return match.slice(0, 1).toUpperCase() + match.slice(1);
            }).replace(/[^\p{Letter}0-9]/gu, '');

            return result.slice(0, 1).toLowerCase() + result.slice(1);
        }
    };
}

export default Object.prototype.toCamelCase;