'use strict';
export default (() => {
  if ('sum' in Object === false) {
    /**
     * @summary Returns the sum of the elements.
     * @returns {Number}
     * @example [1, 2, 3].sum() // 6
     * @since 0.1.0
     * @see https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/sum.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/src/js/sum.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/test/sum.js
     */
    Object.prototype.sum = function() {
      if (this.constructor === Array) {
        return this.reduce((accumulator, current) => {
          return accumulator + Number(current)|0;
        }, 0);
      }
      return 0;
    };
  }
})();
