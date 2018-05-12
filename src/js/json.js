'use strict';
export default (() => {
  if ('json' in Object === false) {
    /**
     * @summary Returns the string representation of the variable turned into JSON
     * @returns {String}
     * @example {name: "John"}.json() // {"name": "John"}
     * @since 0.1.0
     * @see https://github.com/stellar-labs/prototype-storm/v0.1.0/dist/json.min.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/src/js/json.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/test/json.js
     */
    Object.prototype.json = function() {
      return JSON.stringify(this);
    };
  }
})();
