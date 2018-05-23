'use strict';

if( 'pass' in Object.prototype === false ) {
    /**
     * @summary Returns true if the element passes the regexp check.
     * @param {RegExp} options.regexp=/(?:)/ regular expression to test
     * @returns {Boolean}
     * @example "hello".pass(/[a-z]/g) // true
     * @example Number(34).pass(/^[3]/) // true
     * @since 0.1.0
     * @see https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/pass.min.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/src/js/pass.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/pass/test.js
     */ 
    Object.prototype.pass = function(options = { regexp: /(?:)/ }) {
        // Array
        if( this.constructor === Array ) {
            return true;
        }

        // Boolean
        if( this.constructor === Boolean ) {
            return true;
        }

        // Date
        if( this.constructor === Date ) {
            return options.regexp.test(this.toString());
        }

        // Number
        if( this.constructor === Number ) {
            return options.regexp.test(this.toString());
        }

        // Object
        if( this.constructor === Object ) {
            return true;
        }

        // RegExp
        if( this.constructor === RegExp ) {
            return options.regexp.test(this.toString());
        }

        // String
        if( this.constructor === String ) {
            return options.regexp.test(this);
        }
    };
}

export default Object.prototype.pass;