'use strict';

if( 'parseInt' in Object.prototype === false ) {
    /**
     * @summary Parse the element and returns its integer counterpart.
     * @returns {Integer}
     * @example "42".parseInt() // 42
     * @since [[ VERSION HERE ]]
     * @see https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/parse-int.min.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/src/js/parse-int.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/test/parse-int.js
     */ 
    Object.prototype.parseInt = function() {
        return parseInt(this.toString());
    };
}

export default Object.prototype.parseInt;