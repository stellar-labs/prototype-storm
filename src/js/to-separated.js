'use strict';

if( 'toSeparated' in Object.prototype === false ) {
    /**
     * @summary Separate the items relative to a separator and returns the separated string.
     * @returns {String}
     * @example ['php', 'js', 'mysql'].toSeparated() // "php,js,mysql"
     * @example ['php', 'js', 'mysql'].toSeparated({ separator: ', ' }) // "php, js, mysql"
     * @example ['php', 'js', 'mysql'].toSeparated({ separator: ', ', finisher: ' and ' }) // "php, js and mysql"
     * @since 0.1.0
     * @see https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/to-separated.min.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/src/js/to-separated.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/test/to-separated.js
     */ 
    Object.prototype.toSeparated = function(options = { separator: ',' }) {
        if( 'separator' in options === true && (options.separator === null || options.separator === undefined || options.separator.constructor !== String ) ) {
            throw new Error('toSeparated() expects options "separator" to be a string');
        }

        if( 'finisher' in options === true && (options.finisher === null || options.finisher === undefined || options.finisher.constructor !== String ) ) {
            throw new Error('toSeparated() expects options "finisher" to be a string');
        }

        // Array
        if( this.constructor === Array ) {
            if( this.length === 0 ) {
                return '';
            }
            else if( this.length === 1 ) {
                return this[0];
            }
            else {
                return [this.slice(0, -1).join(options.separator), this.slice(-1)].join('finisher' in options ? options.finisher : options.separator);
            }
        }
    };
}

export default Object.prototype.toSeparated;