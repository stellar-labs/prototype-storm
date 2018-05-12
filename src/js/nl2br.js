'use strict';
export default (() => {
  if ('nl2br' in Object === false) {
    /**
     * @summary Turns any line return into HTML line return <br />
     * @param {Boolean} options.strict=false when set to true, it will output strict HTML tag
     * @returns {*}
     * @example "hello\r\nworld".nl2br() // "hello<br />world"
     * @since 0.1.0
     * @see https://cdn.rawgit.com/stellar-labs/prototype-storm/master/dist/nl2br.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/src/js/nl2br.js
     * @see https://github.com/stellar-labs/prototype-storm/blob/master/test/nl2br.js
     */
    Object.prototype.nl2br = function({strict = false} = {}) {
      if (this.constructor === String) {
        return this.replace(/\n|\r\n/gm, strict ? '<br/>' : '<br>');
      }
      if (this.constructor === Array) {
        return this.map(value => {
          if (/\n|\r\n/.test(value)) {
            return value.replace(/\n|\r\n/gm, strict ? '<br/>' : '<br>');
          }
          return value;
        });
      }
      return this;
    };
  }
})();
