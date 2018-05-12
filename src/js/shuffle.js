'use strict';
export default (() => {
  if ('shuffle' in Object === false) {
    /**
     * @summary Disorder the elements randomly.
     * @return {*}
     * @example [1, 2, 3].shuffle() // [3, 1, 2]
     * @example "hello world".shuffle() // "lohel"
     * @since 0.1.0
     * @see https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/shuffle.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/src/js/shuffle.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/test/shuffle.js
     */
    Object.prototype.shuffle = function() {
      if (this.constructor === Array) {
        return this.reduce((accumulator, current, index) => {
          const random = Math.floor(Math.random() * accumulator.length);
          [accumulator[index], accumulator[random]] = [accumulator[random], accumulator[index]];
          return accumulator;
        }, this.slice());
      }
      if (this.constructor === String) {
        return [...this].reduce((accumulator, current, index) => {
          const random = Math.floor(Math.random() * accumulator.length);
          [accumulator[index], accumulator[random]] = [accumulator[random], accumulator[index]];
          return accumulator;
        }, [...this]).join('');
      }
      if (this.constructor === Number) {
        return Number([...this.toString()].reduce((accumulator, current, index) => {
          const random = Math.floor(Math.random() * accumulator.length);
          [accumulator[index], accumulator[random]] = [accumulator[random], accumulator[index]];
          return accumulator;
        }, [...this.toString()]).join(''));
      }
      return this;
    };
  }
})();
