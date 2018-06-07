'use strict';

if( 'toTimestamp' in Object.prototype === false ) {
    /**
     * @summary Return the timestamp from the element.
     * @returns {Integer}
     * @example new Date('2018-01-01T00:00:00+00:00').toTimestamp() // 1514764800
     * @since 0.1.0
     * @see https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/to-timestamp.min.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/src/js/to-timestamp.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/test/to-timestamp.js
     */ 
    Object.prototype.toTimestamp = function() {
        // Date
        if( this.constructor === Date ) {
            return Date.parse(this) / 1000;
        }
    };
}

export default Object.prototype.toTimestamp;