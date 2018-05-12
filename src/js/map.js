'use strict';
export default (() => {
  if ('map' in Object === false) {
    /**
     * @summary Execute a function for each key-pairs.
     * @param {requestCallback} callback function to apply for each key-pairs
     * @return {undefined}
     * @example {a: 1, b: 2, c: 3}.map(myFunction())
     * @since 0.1.0
     * @see https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/map.min.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/src/js/map.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/test/map.js
     */
    Object.prototype.map = function(callback) {
      if (this.constructor === Object) {
        return Object.entries(this).map(([index, value], array) => {
          return callback(value, index, array);
        });
      }
      return;
    };
  }
})();