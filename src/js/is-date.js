'use strict';

if( 'isDate' in Object.prototype === false ) {
    /**
     * @summary Returns true if the variable is a date, else returns false.
     * @returns {Boolean}
     * @example new Date('2018-01-01').isDate() // true
     * @example '2018-01-01'.isDate() // false
     * @since 0.1.0
     * @see https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/is-date.min.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/src/js/is-date.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/test/is-date.js
     */ 
    Object.prototype.isDate = function() {
        // Date
        if( this.constructor === Date ) {
            return true;
        }

        return false;
    };
}

export default Object.prototype.isDate;