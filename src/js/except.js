'use strict';
export default (() => {
  if ('except' in Object === false) {
    /**
     * @todo Do some testing
     * @todo extends except to objects and strings
     */
    Object.prototype.except = function(exclusion = '') {
      if (this.constructor === Array) {
        return this.filter(value => value !== exclusion);
      }
      return this;
    };
  }
})();
