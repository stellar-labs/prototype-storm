'use strict';
export default (() => {
  if ('only' in Object === false) {
    /**
     * @todo add some type checking for other types of search in the array constructor
     * @todo do some testing for the only method
     * @todo extend only to some other scalar types
     * @todo Khalyomede: make search parameter an option to harmonize with others prototypes?
     * @summary Returns only the element you want from an array of keys.
     * @param {Array} search array of keys (or values for an array) to filter with
     * @returns {*}
     * @example ['js', 'php', 'node'].only(['js', 'node']) // ['js', 'node']
     * @since 0.1.0
     * @see https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/only.min.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/src/js/only.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/test/only.js
     */
    Object.prototype.only = function(search = []) {
      if (this.constructor === Array) {
        return this.filter(value => search.constructor === Array ? search.includes(value) : search.constructor === String ? value === value : value);
      }
      return this;
    };
  }
})();
