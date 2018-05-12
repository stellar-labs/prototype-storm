'use strict';
export default (() => {
  if ('flatten' in Object === false) {
    /**
     * @summary Returns a one dimensional array containing all the values of the element.
     * @returns {Array}
     * @example {a: 1, b: 2, c: 3}.flatten() // [1, 2, 3]
     * @example [1, {a: 2, b: 3}].flatten() // [1, 2, 3]
     * @since 0.1.0
     * @see https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/flatten.min.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/src/js/flatten.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/test/flatten.js
     */
    Object.prototype.flatten = function() {
      if (this.constructor === Object) {
        return Object.entries(this).reduce((accumulator, [key, value]) => {
          return Object.assign(accumulator, value.constructor === Object ? Object.prototype.flatten.call(value) : {
            [`${key}`]: value
          });
        }, {});
      }
      if (this.constructor === Array) {
        return this.reduce((accumulator, current) => {
          return current.constructor === Array ? [...accumulator, ...Object.prototype.flatten.call(current)] : [...accumulator, current];
        }, []);
      }
      return;
    };
  }
})();
