'use strict';
export default (() => {
  /**
   * @summary Return the average of all the number elements.
   * @return {Number}
   * @example [1, 2, 3].average() // 6
   * @example {a: 1, b: 2, c: 3}.average() // 6
   * @since 0.1.0
   * @see https://cdn.rawgit.com/stellar-labs/prototype-storm/v0.1.0/dist/average.js
   * @see https://github.com/stellar-labs/prototype-storm/average.js
   * @see https://github.com/stellar-labs/prototype-storm/test/average.js
   */
  Object.prototype.average = function() {
    if (this.constructor === Array) {
      return this.filter(value => !isNaN(Number(value))).reduce((sum, current) => {
        return sum + current;
      }, 0);
    }
    return;
  };
})();
