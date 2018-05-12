'use strict';
export default (() => {
  if ('empty' in Object === false) {
    /**
     * @summary Returns true if the element is empty, else returns false.
     * @return {Boolean}
     * @example {}.empty() // true
     * @example [].empty() // true
     * @example ''.empty() // true
     * @example 0.empty() // true
     * @example new Regexp('').empty() // true
     * @since 0.1.0
     * @see https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/empty.min.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/src/js/empty.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/test/empty.js
     */
    Object.prototype.empty = function() {
      if (this.constructor === Object) {
        return Object.keys(this).length === 0;
      }
      if (this.constructor === Array) {
        return this.length === 0;
      }
      if (this.constructor === String) {
        return this.length === 0;
      }
      if (this.constructor === Number) {
        return this === 0;
      }
      if(this.constructor === RegExp) {
        return this == '/(?:)/';
      }
      return;
    };
  }
})();
