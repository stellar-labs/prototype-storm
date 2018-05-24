'use strict';

if( 'parseDate' in Object.prototype === false ) {
    /**
     * @summary Returns a new date from the element.
     * @returns {Date}
     * @example '2018-01-01'.parseDate() // new Date('2018-01-01)
     * @since 0.1.0
     * @see https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/parse-date.min.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/src/js/parse-date.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/test/parse-date.js
     */ 
    Object.prototype.parseDate = function() {
        return new Date(this.toString());
    };
}

export default Object.prototype.parseDate;