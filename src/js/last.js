'use strict';
export default (() => {
  if ('last' in Object === false) {
    /**
     * @todo do some testing for last method
     * @todo extend last to other scalar types
     */
    Object.prototype.last = function() {
      if (this.constructor === Array) {
        return this[this.length - 1];
      }
      return this;
    };
  }
})();
