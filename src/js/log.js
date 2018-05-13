'use strict';

if( 'log' in Object.prototype === false ) {
    /**
     * @summary Prompt to the console the element and returns the element.
     * @returns {*}
     * @example "hello".log()
     * @example [1, 2].log()
     * @example [1, 2].log().average() // chainable
     * @since 0.1.0
     * @see https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/log.min.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/src/js/log.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/test/log.js
     */ 
    Object.prototype.log = function() {
        console.log(this);

        return this;
    };
}

export default Object.prototype.log;