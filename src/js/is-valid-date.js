'use strict';

if( 'isValidDate' in Object.prototype === false ) {
    /**
     * @summary Returns true if the element is a valid date, else returns false.
     * @returns {Boolean}
     * @example '2018-01-01'.isValidDate() // true
     * @example new Date('2018-01-01').isValidDate() // true
     * @example 'test'.isValidDate() // false
     * @example new Date('test').isValidDate() // false
     * @since 0.1.0
     * @see https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/is-valid-date.min.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/src/js/is-valid-date.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/test/is-valid-date.js
     */ 
    Object.prototype.isValidDate = function() {
        // Date
        if( this.constructor === Date ) {
            return this.toString() !== 'Invalid Date';
        }

        return new Date(this.toString()).toString() !== 'Invalid Date';
    };
}

export default Object.prototype.isValidDate;