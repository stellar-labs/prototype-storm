'use strict';
export default (() => {
  if ('last' in Object === false) {
    /**
     * @todo do some testing for last method
     * @todo extend last to other scalar types
     * @summary Returns the last element of the variable
     * @returns {*}
     * @example [1, 2, 3].last() // 3
     * @since 0.1.0
     * @see https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/last.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/src/js/last.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/test/last.js
     */
    Object.prototype.last = function() {
      if (this.constructor === Array) {
        return this[this.length - 1];
      }
      return this;
    };
  }
})();
