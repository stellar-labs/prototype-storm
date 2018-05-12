'use strict';
export default (() => {
  if ('ellipsis' in Object === false) {
    /**
     * @todo do some testing for ellipsis
     * @summary Cap a string by a max character length and an ellipsis character.
     * @param {Integer} options.max=0 maximum of character until it should append an ellipsis
     * @param {String} otpions.end="..." ellipsis character to display if the max character is reached
     * @returns {String}
     * @example "hello world".ellipsis({ max: 5 }) // hello...
     * @example "hello universe".ellipsis({ max: 5, end: '! }) // "hello!"
     * @since 0.1.0
     * @see https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/ellipsis.min.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/src/js/ellipsis.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/test/ellipsis.js
     */
    Object.prototype.ellipsis = function({max = 0, end = '...'} = {}) {
      if (this.constructor === String ) {
        return this.substring(0, max) + ((max >= this.length) ? '' : end);
      }
      if (this.constructor === Number) {
        const string = this.toString();
        return string.substring(0, max) + ((max >= string.length) ? '' : end);
      }
      return this;
    };
  }
})();
