'use strict';
export default (() => {
  if ('ellipsis' in Object === false) {
    /**
     * @todo do some testing for ellipsis
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
